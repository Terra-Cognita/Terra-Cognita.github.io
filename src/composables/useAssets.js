export function useAssets() {

  const logos = import.meta.globEager(`/src/assets/logos/*`); 
  const pngs = import.meta.globEager(`/src/assets/images/*.png`);
  const jpegs = import.meta.globEager('/src/assets/images/*.jpeg');

  const logoPath = "/src/assets/logos/"
  const imgPath = "/src/assets/images/"

  return {
    logoWhite: logos[logoPath+'terra-cognita_white.svg'].default,
    logoSymbolBlack: logos[logoPath+'terra-cognita_symbol.png'].default,
    bgBanner1: pngs[imgPath+'BG-Banner1.png'].default,
    imgCrystalElement: pngs[imgPath+'Crystal-Elements.png'].default,
    imgCrystalBanner: pngs[imgPath+'Crystal-Banner.png'].default,
  }; 
}