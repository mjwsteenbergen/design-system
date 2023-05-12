import { convertPalettteToTailwind, colors } from './colors';
import './style.css'
import './tailwind.css'

const theme = {
  colors: {
    transparent: 'transparent',
    'white': "#FCFCFC",
    "black": "#0F0F0F",
    ...convertPalettteToTailwind(colors),
  }
};

const divs = Object.entries(theme.colors).map(i => {
  const [name, value] = i;

  if (typeof value === 'object') {
    return Object.keys(value).map(j => name + "-" + j)
  }
  return undefined
}).filter(i => i).map(i => `<div>${i?.map(j => `<div class="bg-${j} p-6">${j}</div>`).reduce((p,n) => p+n)}</div>`)

const wrapper = document.getElementById("colors");

if (wrapper) {
  wrapper.innerHTML = divs.reduce((prev, next) => prev + next);
}
