const fs = require('fs');
const { Resvg } = require('@resvg/resvg-js');

// extract inner of the official ptBIM black wordmark (paths, no fill set -> inheritable)
let blk = fs.readFileSync('assets/ptbim-logo-black.svg', 'utf8');
const inner = blk.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const VB_W = 171.5, VB_H = 40.7;

function iconSVG(size, wordFrac, round) {
  const w = size * wordFrac;
  const scale = w / VB_W;
  const h = VB_H * scale;
  const tx = (size - w) / 2, ty = (size - h) / 2;
  const rx = round ? Math.round(size * 0.20) : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`
    + `<rect width="${size}" height="${size}" rx="${rx}" fill="#0b0b0b"/>`
    + `<g transform="translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${scale.toFixed(4)})" fill="#ffffff">${inner}</g>`
    + `</svg>`;
}
function png(svg, size) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
}

const out = [
  ['deploy/icons/icon-192.png', iconSVG(192, 0.74, true), 192],
  ['deploy/icons/icon-512.png', iconSVG(512, 0.74, true), 512],
  ['deploy/icons/icon-512-maskable.png', iconSVG(512, 0.60, false), 512],
  ['deploy/icons/apple-touch-icon.png', iconSVG(180, 0.72, false), 180],
  ['deploy/icons/favicon-48.png', iconSVG(48, 0.80, true), 48],
];
for (const [p, svg, s] of out) { fs.writeFileSync(p, png(svg, s)); console.log('wrote', p); }
// favicon.svg (scalable)
fs.writeFileSync('deploy/icons/favicon.svg', iconSVG(64, 0.78, true));
console.log('wrote deploy/icons/favicon.svg');
