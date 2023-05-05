export function useAssets() {
  const avatars = import.meta.globEager(`/src/assets/avatars/*.svg`);
  const pngs = import.meta.globEager(`/src/assets/*/*.png`);
  const jpegs = import.meta.globEager("/src/assets/*/*.jpeg");

  const avatarPath = "/src/assets/avatars/";
  const imgPath = "/src/assets/images/";

  return {
    // avatars
    maleAvatar: avatars[avatarPath + "avatarMale.svg"].default,
    femaleAvatar: avatars[avatarPath + "avatarFemale.svg"].default,
    // images
    imgCrystalElement: pngs[imgPath + "Crystal-Elements.png"].default,
    imgProfileOrimbu: pngs[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: pngs[imgPath + "profileUser.png"].default,
  };
}
