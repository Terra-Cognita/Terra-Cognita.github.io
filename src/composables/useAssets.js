export function useAssets() {
  const pngs = import.meta.globEager(`/src/assets/*/*.png`);
  const jpegs = import.meta.globEager("/src/assets/*/*.jpeg");

  const bgPath = "/src/assets/backgrounds/";
  const imgPath = "/src/assets/images/";

  return {
    bgBanner: pngs[bgPath + "bgBanner.png"].default,
    bgCrystal: pngs[bgPath + "bgCrystal.png"].default,
    bgCrystalMasked: pngs[bgPath + "bgCrystalMasked.png"].default,
    bgMultipleCrystals: pngs[bgPath + "bgMultipleCrystals.png"].default,
    //
    bgBanner1: pngs[imgPath + "BG-Banner1.png"].default,
    imgCrystalElement: pngs[imgPath + "Crystal-Elements.png"].default,
    imgCrystalBanner: pngs[imgPath + "Crystal-Banner.png"].default,
    imgOrimbu: pngs[imgPath + "chatButton-Orimbu.png"].default,
    imgProfileOrimbu: pngs[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: pngs[imgPath + "profileUser.png"].default,
  };
}
