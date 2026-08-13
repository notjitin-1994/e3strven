const sharp = require('sharp');
const path = require('path');

async function makeFavicon() {
  const logo = await sharp(path.join(__dirname, '../public/assets/logo-black.png')).toBuffer();
  
  // Create a 512x512 rounded transparent box (no fill, just stroke)
  const svgRect = `
    <svg width="512" height="512">
      <rect x="24" y="24" width="464" height="464" rx="128" ry="128" fill="none" stroke="black" stroke-width="24"/>
    </svg>
  `;
  
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    {
      input: Buffer.from(svgRect),
      top: 0,
      left: 0,
    },
    {
      input: await sharp(logo).resize({ width: 360, height: 360, fit: 'contain', background: {r:0,g:0,b:0,alpha:0} }).toBuffer(),
      gravity: 'center'
    }
  ])
  .png()
  .toFile(path.join(__dirname, '../src/app/icon.png')); // Next.js App Router uses icon.png
  
  console.log('Favicon generated at src/app/icon.png!');
}

makeFavicon().catch(console.error);
