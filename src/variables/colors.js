const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`
const grayScale = v => rgb(v, v, v)

module.exports = {
  // ------------------------------------
  // Colors
  // ------------------------------------
  'color-mine-shaft': rgb(51, 51, 51), // #333333
  'color-tundora': rgb(68, 68, 68), // #444;
  'color-emperor': rgb(85, 85, 85), // #555555
  'color-dove-gray': rgb(112, 112, 112), // #707070;
  'color-gray': rgb(136, 136, 136), // #888888

  'color-alabaster': rgb(248, 248, 248), // #f8f8f8
  'color-gallery': rgb(235, 235, 235), // #ebebeb;

  'color-white': rgb(255, 255, 255), // #fff;

  'color-fuel-yellow': rgb(240, 162, 39), // #f0a227
  'color-shiny-mantis': rgb(104, 203, 96), // #68cb60;
  'color-mantis': rgb(122, 203, 102), //#7acb66
  'color-fruit-salad': rgb(79, 155, 73) // #4f9b49
  // ------------------------------------
  // Grayscale
  // ------------------------------------
}
