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
        this.userInputDelay = 4500;
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

        // update user message
        let user_msg = { name: "User", message: textInput }
        this.messages.push(user_msg);
        this.updateChatText(user_msg)
        textField.value = ''

        // update bot answer
        $.get("https://tcog-chatbot.azurewebsites.net/get", { msg: textInput })
        .done( answer => {
            let chatbotAnswer = { name: this.name, message: answer };
            this.messages.push(chatbotAnswer);
            this.updateChatText(chatbox)
            this.openUserInput()
        })
        .fail( error => {
            console.log('>> app.js >> OnSendButton >> get-error:')
            console.log(error)

            let errorText = "Hey there! I'm sorry, but I cannot chat right now. \
                            Can you be back in a while? Then I tell you all about this amazing world!";
            let errorMessage = { name: this.name, message: errorText };
            this.messages.push(errorMessage);
            this.updateChatText(chatbox)
        });
        // .always(function() {
        // });
    }

    updateChatText(chatbox) {
        let name = this.name;
        let message = ''
        let msg = this.messages[this.messages.length - 1]

        const chatmessages = document.querySelector('.chatbox__messages');
        
        if (msg.name === name) {
            chatmessages.innerHTML += this.getBotMessageHTML()
            this.typeBotText(chatbox, msg.message)
        }
        else {
            message = this.user + msg.message
            chatmessages.innerHTML += this.getUserMessageHTML(message)
        }
    }

    typeBotText(chatbox, message) {
        
        // messages
        var botMessages = document.getElementsByClassName("messages__bot");
        var msgIndex = botMessages.length - 1
        var currentMsgContent = botMessages[msgIndex].innerHTML
        
        // input
        const chatInput = document.querySelector('.chatbox__input');
        var inputContent = chatInput.innerHTML
        var userPrefix = this.user

        // type code
        var i = 0, text;
        (function type() {
            text = message.slice(0, ++i);
            botMessages[msgIndex].innerHTML = currentMsgContent + text;
            setTimeout(type, 60);
            if (text === message) return;
        })();

        // clear bot-caret and open user-input element
        setTimeout(function() {
            botMessages[msgIndex].classList.remove("caret")
            chatInput.innerHTML = '<span id="prompt__text">' + userPrefix + '</span>' + inputContent
            chatInput.classList.add("caret");
        }, this.userInputDelay);
    }

    getBotMessageHTML() {
        return '<div id="prompt__text" class="messages__item messages__bot caret">' + this.prefix + '</div>'
    }

    getUserMessageHTML(message) {
        return '<div id="prompt__text" class="messages__item">' + message + '</div>'
    }
}

const chatbox = new Chatbox();
chatbox.display();