const INIT_BOT_MSG =
  "Hello! I'm Orimbu, the guardian of Terra Cognita port. \
  I welcome you to this magical and mysterious land. \
  I'm always here, if you need any help. \
  Just ask me, okay? No one knows this land better than I do...";

const DEFAULT_BOT_MSG =
  "Hey there! \
  This is a default message to test my development :) \
  I hope we can have a real chat soon. See ya!";

export default {
  async requestAnswer(text) {
    let answer;
    if (text === "init") {
      answer = await new Promise((resolve) => {
        setTimeout(() => resolve(INIT_BOT_MSG), 2000);
      });
    } else {
      answer = await new Promise((resolve) => {
        setTimeout(() => resolve(DEFAULT_BOT_MSG), 2000);
      });
    }
    return answer;
  },
};
