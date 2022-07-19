class Chatbox {
    constructor() {
        this.args = {
            chatBox: document.querySelector('#chatbox')
        }
        this.name = 'chatbot';
        this.prefix = 'TC-AI:~$ '
        this.user = 'user:~$ '
        this.messages = [];
        this.userInputDelay = 3500;
    }

    display() {
        const {chatBox} = this.args

        this.initPrompt()

        // add user-input listener
        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })


        node.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
        resizeInput.call(input); // immediately call the function
        function resizeInput() {
            this.style.width = this.value.length + "ch";
        }


    }

    onSendButton(chatbox) {
        // html query elements
        var textField = chatbox.querySelector('input');
        let textInput = textField.value
        if (textInput === "") {
            return;
        }
        // if (textInput === "clear") {
        //     // clears the user input line
        //     textField.value = '';
        //     document.querySelector('#user_id').innerHTML = ''
        //     document.querySelector('.chatbox__input').classList.remove("caret");    // hide input caret
        //     this.clearPrompt();
        //     return;
        // }
        this.pushUserMsg(chatbox, textInput)
        this.pushBotAnswer(textInput)
    }

    pushUserMsg(chatbox , textInput) {
        let user_msg = { name: "User", message: textInput }
        this.messages.push(user_msg);
        this.updateChatText(user_msg)
        chatbox.querySelector('input').value = ''
    }

    pushBotAnswer(textInput) {
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
        });
        // .always(function() {
        // });
    }

    updateChatText(chatbox) {
        let name = this.name;
        let message = ''
        let msg = this.messages[this.messages.length - 1]

        // input elements
        const chatInput = document.querySelector('input');
        const chatmessages = document.querySelector('.chatbox__messages');
        const userID = document.querySelector('#user_id');
        
        if (msg.name === name) {
            this.typeBotText(chatbox, msg.message)
        }
        else {
            message = this.user + msg.message
            chatmessages.innerHTML += this.getUserMessageHTML(message)
            userID.innerHTML = ''                               // clears the user id for the bot answer
            chatInput.classList.remove("caret");                // clear (hide) caret from input 
            chatmessages.innerHTML += this.getBotMessageHTML()  // initialize bot answer line
        }
    }

    typeBotText(chatbox, message) {
        
        // messages elements
        var botMessages = document.getElementsByClassName("messages__bot");
        var msgIndex = botMessages.length - 1
        var currentMsgContent = botMessages[msgIndex].innerHTML
        
        // input elements
        const chatInput = document.querySelector('input');
        const userID = document.querySelector('#user_id');
        var userPrefix = this.user

        // typing effect code
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
            userID.innerHTML = userPrefix
            chatInput.classList.add("caret");
        }, this.userInputDelay);
    }

    getBotMessageHTML() {
        return '<div class="prompt__text messages__item messages__bot caret">' + this.prefix + '</div>'
    }

    getUserMessageHTML(message) {
        return '<div class="prompt__text messages__item">' + message + '</div>'
    }

    initPrompt() {
        // initialize first bot-message line
        const chatmessages = document.querySelector('.chatbox__messages');
        chatmessages.innerHTML = this.getBotMessageHTML()

        // input first bot-message
        let initText = "Welcome to Terra Cognita Magical Land...!";
        let initMessage = { name: this.name, message: initText };
        this.messages.push(initMessage);
        this.updateChatText(chatbox)
    }

    // clearPrompt() {
    //     this.messages = [];
    //     document.querySelector('.chatbox__messages').innerHTML = '<div></div>'        
    //     this.display()
    // }
}

const chatbox = new Chatbox();
chatbox.display();