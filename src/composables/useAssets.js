export function useAssets() {

  const pngs = import.meta.globEager(`/src/assets/images/*.png`);
  const jpegs = import.meta.globEager('/src/assets/images/*.jpeg');

  const path = "/src/assets/images/"

  return {
    bgBanner1: pngs[path+'BG-Banner1.png'].default,
    imgCrystalElement: pngs[path+'Crystal-Elements.png'].default,
  }; 
}