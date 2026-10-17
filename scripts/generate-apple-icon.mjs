import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#1F3354" />
  <circle cx="90" cy="90" r="72" fill="none" stroke="#8A5F1F" stroke-width="4" stroke-dasharray="8,5" />
  <text x="90" y="116" font-family="'Cormorant Garamond', Georgia, serif" font-size="84" font-weight="700" fill="#FAF6EE" text-anchor="middle">MK</text>
</svg>`;

await sharp(Buffer.from(svg))
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('Apple touch icon generated successfully at public/apple-touch-icon.png');
