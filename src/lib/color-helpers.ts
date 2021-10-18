import { getLuminance } from 'polished';

export function getDarkest(colors) {
  return colors
    ?.map((color) => ({ color, lum: getLuminance(color) }))
    .sort((a, b) => a.lum - b.lum)[0].color;
}
export function getLighest(colors) {
  return colors
    ?.map((color) => ({ color, lum: getLuminance(color) }))
    .sort((a, b) => b.lum - a.lum)[0].color;
}
