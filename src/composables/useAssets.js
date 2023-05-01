export function useAssets() {
  const avatars = import.meta.globEager(`/src/assets/avatars/*.svg`);
  const icons = import.meta.globEager(`/src/assets/icons/*.svg`);
  const pngs = import.meta.globEager(`/src/assets/*/*.png`);
  const jpegs = import.meta.globEager("/src/assets/*/*.jpeg");

  const avatarPath = "/src/assets/avatars/";
  const iconsPath = "/src/assets/icons/";
  const bgPath = "/src/assets/backgrounds/";
  const imgPath = "/src/assets/images/";

  return {
    maleAvatar: avatars[avatarPath + "avatarMale.svg"].default,
    femaleAvatar: avatars[avatarPath + "avatarFemale.svg"].default,
    //
    bgBanner: pngs[bgPath + "bgBanner.png"].default,
    bgCrystal: pngs[bgPath + "bgCrystal.png"].default,
    bgCrystalMasked: pngs[bgPath + "bgCrystalMasked.png"].default,
    bgMultipleCrystals: pngs[bgPath + "bgMultipleCrystals.png"].default,
    //
    imgCrystalElement: pngs[imgPath + "Crystal-Elements.png"].default,
    imgCrystalBanner: pngs[imgPath + "Crystal-Banner.png"].default,
    imgProfileOrimbu: pngs[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: pngs[imgPath + "profileUser.png"].default,
  };
}
