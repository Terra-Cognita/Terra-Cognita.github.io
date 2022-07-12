class Chatbox {
    constructor() {
        this.args = {
            chatBox: document.querySelector('#chatbox')
        }
        this.name = 'chatbot';
        this.prefix = 'TC-AI:~$ '
        this.user = 'user:~$ '
        this.messages = [];
        this.state = false;
    }

    display() {
        const {chatBox} = this.args

        let initText = "Welcome to Terra Cognita Magical Land...!";
        let initMessage = { name: this.name, message: initText };
        this.messages.push(initMessage);
        this.updateChatText(chatbox)

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    onSendButton(chatbox) {
        // html query elements
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
        // chattyping.innerHTML = this.getTypingHTML();

        // bot answer
        $.get("https://tcog-chatbot.azurewebsites.net/get", { msg: textInput })
        .done( answer => {
            let chatbotAnswer = { name: this.name, message: answer };
            this.messages.push(chatbotAnswer);
            this.updateChatText(chatbox)
        })
        .fail( error => {
            console.log('>> app.js >> OnSendButton >> get-error:')
            console.log(error)

            let errorText = "Hey there! I'm sorry, but I cannot chat right now. \
                            Can you be back in a while? Then I tell you all about this amazing world!";
            let errorMessage = { name: this.name, message: errorText };
            this.messages.push(errorMessage);
            this.updateChatText(chatbox)
        })
        .always(function() {
            // chattyping.innerHTML = '';
        });
    }

    updateChatText(chatbox) {
        let name = this.name;
        let message = ''
        let msg = this.messages[this.messages.length - 1]

        const chatmessages = document.querySelector('.chatbox__messages');

        if (msg.name === name) {
            message = this.prefix + msg.message
            chatmessages.innerHTML += '<div class="messages__item message_typing">' + message + '</div>'
        }
        else {
            message = this.user + msg.message
            chatmessages.innerHTML += '<div class="messages__item">' + message + '</div>'
        }

        // this.messages.slice().reverse().forEach( (m) => {
        //     if (m.name === name) {
        //         message = this.prefix + m.message
        //         html += '<div class="messages__item">' + message + '</div>'
        //     }
        //     else {
        //         message = this.user + m.message
        //         html += '<div class="messages__item">' + message + '</div>'
        //     }
        //   });

        // const chatmessage = document.querySelector('.chatbox__messages');
        // chatmessage.innerHTML = html;
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