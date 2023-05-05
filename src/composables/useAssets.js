export function useAssets() {
  const avatars = import.meta.globEager(`/src/assets/avatars/*.svg`);
  const images = import.meta.globEager(`/src/assets/images/*.png`);
  const sounds = import.meta.globEager(`/src/assets/sounds/*.mp3`);

  const avatarPath = "/src/assets/avatars/";
  const imgPath = "/src/assets/images/";
  const soundPath = "/src/assets/sounds/";

  return {
    // avatars
    maleAvatar: avatars[avatarPath + "avatarMale.svg"].default,
    femaleAvatar: avatars[avatarPath + "avatarFemale.svg"].default,
    // images
    imgCrystalElement: images[imgPath + "crystalElements.png"].default,
    imgProfileOrimbu: images[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: images[imgPath + "profileUser.png"].default,
    //sounds
    soundWelcomeToTC:
      sounds[soundPath + "WelcomeToTerraCognita_PortScoretest.mp3"].default,
  };
}
