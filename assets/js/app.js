class Chatbox {
    constructor() {
        this.args = {
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }
        this.name = 'chatbot';
        this.messages = [];
    }

    display() {
        const {chatBox, sendButton} = this.args;

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    onSendButton(chatbox) {
        // html query elements
        const chattyping = document.querySelector('.messages__item--typing');
        var textField = chatbox.querySelector('input');
        let textInput = textField.value
        if (textInput === "") {
            return;
        }

        // user message
        let user_msg = { name: "User", message: textInput }
        this.messages.push(user_msg);
        this.updateChatText(user_msg)
        textField.value = ''

        // Waiting for chatbot response
        chattyping.innerHTML = this.getTypingHTML();

        // bot answer
        $.get("https://tcog-chatbot.azurewebsites.net/get", { msg: textInput }).done( answer => {
            let chatbotAnswer = { name: this.name, message: answer };
            this.messages.push(chatbotAnswer);
            chattyping.innerHTML = '';
            this.updateChatText(chatbox)
        });
    }

    updateChatText(chatbox) {
        var html = '';
        let name = this.name;
        this.messages.slice().reverse().forEach( (m) => {
            if (m.name === name) {
                html += '<div class="messages__item messages__item--operator">' + m.message + '</div>'
            }
            else {
                html += '<div class="messages__item messages__item--visitor">' + m.message + '</div>'
            }
          });

        const chatmessage = document.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }

    getTypingHTML() {
        return '<spam>Terra-Cognita is typing</spam> \
                <div class="typingIndicatorBubble"> \
                    <div class="typingIndicatorBubbleDot"></div> \
                    <div class="typingIndicatorBubbleDot"></div> \
                    <div class="typingIndicatorBubbleDot"></div> \
                </div>'
    }
}


const chatbox = new Chatbox();
chatbox.display();