export function useAssets() {
  const avatars = import.meta.globEager(`/src/assets/avatars/*.svg`);
  const images = import.meta.globEager(`/src/assets/images/*.png`);

  const avatarPath = "/src/assets/avatars/";
  const imgPath = "/src/assets/images/";

  return {
    // avatars
    maleAvatar: avatars[avatarPath + "avatarMale.svg"].default,
    femaleAvatar: avatars[avatarPath + "avatarFemale.svg"].default,
    // images
    imgCrystalElement: images[imgPath + "crystalElements.png"].default,
    imgProfileOrimbu: images[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: images[imgPath + "profileUser.png"].default,
  };
}
