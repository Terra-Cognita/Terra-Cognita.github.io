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
        this.messages = [];
    }

    displayChatBox() {
        const {chatBox} = this.components

        this.openBotLine(chatBox)   
        this.pushBotMsg(chatBox, this.initMessage)
        this.activateUserInput(chatBox);
        
        // add user-input listener
        var input = chatBox.querySelector('#chatbox__input-user_message');
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

        // push messages to chat area
        this.deactivateUserInput(chatBox)

        this.pushUserMsg(chatBox, textInput)

        let botAnswer = this.fetchBotMsg(chatBox, textInput)
        this.pushBotMsg(chatBox, botAnswer)
        
        this.activateUserInput(chatBox);
    }
    
    pushUserMsg(chatBox , message) {
        // let user_msg = { name: "User", message: textInput };
        // this.messages.push(user_msg);
        this.saveMsg("User", message);

        // this.updateChatBox(chatBox)
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getUserMessageHTML(message)
    }

    pushBotMsg(chatBox, textMessage) {
        
        // let latestMessage = this.messages[this.messages.length - 1]
        let allBotMessages = chatBox.getElementsByClassName("messages__bot");
        let curentBotLine = allBotMessages[allBotMessages.length - 1]
        let currentMsgContent = curentBotLine.innerHTML

        if(textMessage === 'error'){
            this.saveMsg("error", this.errorText);
            this.typeBotText(curentBotLine, currentMsgContent, this.errorText)
        } else {
            this.saveMsg(this.name, textMessage);
            this.typeBotText(curentBotLine, currentMsgContent, textMessage)
        }
        this.closeBotLine(chatBox)
    }

    fetchBotMsg(chatBox, textInput) {

        this.openBotLine(chatBox)   

        var result = null;
        $.ajax("https://tcog-chatbot.azurewebsites.net/get",
        {
            type: "get", 
            data: { msg: textInput },
            async: false,
            success: (answer) => {
                result = answer;
            },
            error: (error) => {
                console.log(error)
                result = 'error'
            },
        });
        return result
        // $.get("https://tcog-chatbot.azurewebsites.net/get", { msg: textInput })
        // .done( answer => {
        //     // this.messages.push( { name: this.name, message: answer } );
        //     this.saveMsg(this.name, answer)
        // })
        // .fail( error => {
        //     console.log('>> app.js >> fetchBotMsg >> get-error:')
        //     console.log(error)
        //     // this.messages.push( { name: this.name, message: this.errorText } );
        //     this.saveMsg(this.name, this.errorText)
        // })
        // .always( () => {
        //     // this.updateChatBox(chatBox)
            
        //     // let latestMessage = this.messages[this.messages.length - 1]
        //     // let allBotMessages = chatBox.getElementsByClassName("messages__bot");
        //     // let curentBotLine = allBotMessages[allBotMessages.length - 1]
        //     // let currentMsgContent = curentBotLine.innerHTML

        //     // this.typeBotText(curentBotLine, currentMsgContent, latestMessage.message)
        //     return this.messages[this.messages.length - 1]
        // });
    }

    saveMsg(idName, textInput){
        let msg = { name: idName, message: textInput }
        this.messages.push(msg);
    }

    updateChatBox(chatBox) {
        let latestMessage = this.messages[this.messages.length - 1]
        
        // type Bot answer
        if (latestMessage.name === this.name) {
            

            let allBotMessages = chatBox.getElementsByClassName("messages__bot");
            let curentBotLine = allBotMessages[allBotMessages.length - 1]
            let currentMsgContent = curentBotLine.innerHTML

            this.typeBotText(curentBotLine, currentMsgContent, latestMessage.message)
            // this.typeBotText(chatBox, latestMessage.message)
            this.closeBotLine(chatBox)
            this.activateUserInput(chatBox);
        }
        // update user-inputed message to the chat
        else {
            chatBox.querySelector('.chatbox__messages').innerHTML += this.getUserMessageHTML(latestMessage.message)
            this.deactivateUserInput(chatBox)
        }
    }

    // typeBotText(chatBox, fullContent) {
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

    openBotLine(chatBox) {
        // initialize bot-message line-id and push first message
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getBotMessageHTML()
        // this.updateChatBox(chatBox)
    }

    closeBotLine(chatBox) {
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

    deactivateUserInput(chatBox) {
        chatBox.querySelector('#chatbox__input-user_message').value = ''    // clears input text
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = ''     // clears the user-id for the bot answer
        chatBox.querySelector('#chatbox__input-user_message').classList.remove("caret");    // clear (hide) blinking-caret from input line
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
tc.displayChatBox();