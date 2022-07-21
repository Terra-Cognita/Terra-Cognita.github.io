class TerraCognitaLP {
    constructor() {
        this.components = {
            chatBox: document.querySelector('#chatbox')
        }
        this.name = 'chatbot';
        this.prefix = 'TC-AI:~$ '
        this.user = 'user:~$ '
        this.initMessage = "Welcome to Terra Cognita Magical Land...!";
        this.errorText = "Hey there! I'm sorry, but I cannot chat right now. Can you be back in a while? Then I tell you all about this amazing world!";
        this.messages = [
            { name: this.name, message: this.initMessage }
        ];
    }

    display() {
        const {chatBox} = this.components

        this.activateBot(chatBox)     
        
        this.activateUserInput(chatBox);
        
        // add user-input listener
        var input = chatBox.querySelector('input');
        input.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
        input.addEventListener('input', resizeInput);   // bind the "resizeInput" callback on "input" event
        resizeInput.call(input);                        // immediately call the function
        function resizeInput() {
            this.style.width = this.value.length + "ch";
        }
    }

    onSendButton(chatBox) {
        var textField = chatBox.querySelector('#chatbox__input-user_message');
        let textInput = textField.value
        if (textInput === "") { return; }
        // if (textInput === "clear") {
        //     this.clearPrompt();
        //     return;
        // }
        this.pushUserMsg(chatBox, textInput)
        this.pushBotAnswer(chatBox, textInput)
    }
    
    pushUserMsg(chatBox , textInput) {
        let user_msg = { name: "User", message: textInput }
        this.messages.push(user_msg);
        chatBox.querySelector('#chatbox__input-user_message').value = ''
        this.updateChatBox(chatBox)
    }

    pushBotAnswer(chatBox, textInput) {
        this.activateBot(chatBox)   
        $.get("https://tcog-chatbot.azurewebsites.net/get", { msg: textInput })
        .done( answer => {
            this.messages.push( { name: this.name, message: answer } );
        })
        .fail( error => {
            console.log('>> app.js >> pushBotAnswer >> get-error:')
            console.log(error)
            this.messages.push( { name: this.name, message: this.errorText } );
        })
        .always( () => {
            this.updateChatBox(chatBox)
        });
    }

    updateChatBox(chatBox) {
        let latestMessage = this.messages[this.messages.length - 1]
        
        // type Bot answer
        if (latestMessage.name === this.name) {
            

            let allBotMessages = chatBox.getElementsByClassName("messages__bot");
            let curentBotLine = allBotMessages[allBotMessages.length - 1]
            let currentMsgContent = curentBotLine.innerHTML

            this.typeBotText(curentBotLine, currentMsgContent, latestMessage.message)
        }
        // update user-inputed message to the chat
        else {
            chatBox.querySelector('.chatbox__messages').innerHTML += this.getUserMessageHTML(latestMessage.message)
            this.deactivateUser(chatBox)
        }
        this.deactivateBot(chatBox)
    }

    typeBotText(curentBotLine, currentMsgContent, fullContent) {
        // ref for typing effect: https://codepen.io/tjezidzic/pen/LLWoLw
        let i = 0;
        let text = '';
        
        ( function type() {
            text = fullContent.slice(0, ++i);
            curentBotLine.innerHTML = currentMsgContent + text;
            setTimeout(type, 60);
            if (text === fullContent) return 
        })()
        return
    }

    activateBot(chatBox) {
        // initialize bot-message line-id and push first message
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getBotMessageHTML()
        this.updateChatBox(chatBox)
    }

    deactivateBot(chatBox) {
        // removes blinking-caret from Bot last message
        var botMessages = chatBox.getElementsByClassName("messages__bot");
        botMessages[botMessages.length - 1].classList.remove("caret")
    }

    activateUserInput(chatBox) {        
        // activates user-id and blinking caret on user-input line
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = this.user;   
        chatBox.querySelector('input').classList.add("caret") 
        // set input-tag size back to 1 character-size
        chatBox.querySelector("input").style.width = "1ch";
    }

    deactivateUser(chatBox) {
        // clears the user-id for the bot answer
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = ''
        // clear (hide) blinking-caret from input line
        chatBox.querySelector('#chatbox__input-user_message').classList.remove("caret");    
    }

    getBotMessageHTML() {
        return '<div class="prompt__text messages__item messages__bot caret">' + this.prefix + '</div>'
    }

    getUserMessageHTML(message) {
        return '<div class="prompt__text messages__item">' + this.user + message + '</div>'
    }

    // clearPrompt() {
    //     this.messages = [];
    //     document.querySelector('.chatbox__messages').innerHTML = '<div></div>'        
    //     this.display()
    // }
}

const tc = new TerraCognitaLP();
tc.display();