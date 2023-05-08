export function useAssets() {
  const avatarsSvg = import.meta.globEager(`/src/assets/avatars/*.svg`);
  const avatarsPng = import.meta.globEager(`/src/assets/avatars/*.png`);
  const images = import.meta.globEager(`/src/assets/images/*.png`);
  const sounds = import.meta.globEager(`/src/assets/sounds/*.mp3`);

  const avatarPath = "/src/assets/avatars/";
  const imgPath = "/src/assets/images/";
  const soundPath = "/src/assets/sounds/";

  return {
    // avatars
    avatarChatOrimbu: avatarsPng[avatarPath + "avatarChatOrimbu.png"].default,
    avatarChatUser: avatarsSvg[avatarPath + "avatarChatUser.svg"].default,
    avatarTeamFemale: avatarsSvg[avatarPath + "avatarTeamFemale.svg"].default,
    avatarTeamMale: avatarsSvg[avatarPath + "avatarTeamMale.svg"].default,
    // images
    imgCrystalElement: images[imgPath + "crystalElements.png"].default,
    imgProfileOrimbu: images[imgPath + "profileOrimbu.png"].default,
    imgProfileUser: images[imgPath + "profileUser.png"].default,
    //sounds
    soundWelcomeToTC:
      sounds[soundPath + "WelcomeToTerraCognita_PortScoretest.mp3"].default,
  };
}
