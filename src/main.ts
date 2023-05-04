import './style.css'
import './tailwind.css'

const theme = {
  colors: {
    transparent: 'transparent',
    'white': "#FCFCFC",
    "red": {
      "50": "#D39E9E",
      "100": "#CB7272",
      "200": "#C44949",
      "300": "#BC2323",
      "400": "#B40000",
      "500": "#950000",
      "600": "#760000",
      "700": "#570000",
      "800": "#380000",
      "900": "#1A0000"
    },
    "green": {
      "50": "#9DCF7C",
      "100": "#82C257",
      "200": "#69B637",
      "300": "#52A919",
      "400": "#3E9D00",
      "500": "#348300",
      "600": "#296800",
      "700": "#1F4E00",
      "800": "#153400",
      "900": "#0A1A00"
    },
    "blue": {
      "50": "#BFE4FF",
      "100": "#8FD1FF",
      "200": "#60BDFF",
      "300": "#30A9FF",
      "400": "#0095FF",
      "500": "#007AD1",
      "600": "#005FA3",
      "700": "#004475",
      "800": "#002A47",
      "900": "#000F1A"
    },
    "purple": {
      "50": "#E5BFFF",
      "100": "#CA92F0",
      "200": "#B068E0",
      "300": "#9843D1",
      "400": "#8223C1",
      "500": "#6917A0",
      "600": "#510E7E",
      "700": "#3A075D",
      "800": "#24023B",
      "900": "#0F001A"
    },
    "primary": {
      "50": "#FFFFFF",
      "100": "#FCFCFC",
      "200": "#DBDBDB",
      "300": "#B9B9B9",
      "400": "#979797",
      "500": "#757575",
      "600": "#535353",
      "700": "#313131",
      "800": "#0F0F0F",
      "900": "#000000"
    },
    "gray": {
      "50": "#CECECF",
      "100": "#B1B1B7",
      "200": "#97979F",
      "300": "#7D7D87",
      "400": "#64646F",
      "500": "#51515E",
      "600": "#3F3F4D",
      "700": "#2F2F3C",
      "800": "#20202B",
      "900": "#12121A"
    },
    "black": "#0F0F0F",
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
  



