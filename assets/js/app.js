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

        // initial page message
        this.openBotLine(chatBox)   
        this.pushBotMsg(chatBox, this.initMessage)
        
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

        chatBox.addEventListener("scroll", () => {
            chatBox.scrollTop = chatBox.scrollHeight;
        })
    }

    async onSendButton(chatBox) {
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

        await this.openBotLine(chatBox)   
        let botAnswer = this.fetchBotMsg(textInput)
        this.pushBotMsg(chatBox, botAnswer)
    }
    
    pushUserMsg(chatBox , message) {
        this.saveMsg("User", message);
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getUserMessageHTML(message)   // update page with formatted user-input html
    }

    pushBotMsg(chatBox, textMessage) {
        if(textMessage === 'error'){
            this.saveMsg("error", this.errorText);
            this.typeBotText(chatBox, this.errorText)
        } else {
            this.saveMsg(this.name, textMessage);
            this.typeBotText(chatBox, textMessage)
        }
    }

    fetchBotMsg(textInput) {
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
    }

    saveMsg(idName, textInput){
        let msg = { name: idName, message: textInput }
        this.messages.push(msg);
    }

    async typeBotText(chatBox, fullContent) {
        // ref for typing effect: https://codepen.io/tjezidzic/pen/LLWoLw

        let allBotMessages = chatBox.getElementsByClassName("messages__bot");
        let curentBotLine = allBotMessages[allBotMessages.length - 1]
        let currentMsgContent = curentBotLine.innerHTML

        let i = 0;
        let text = '';

        let typing = new Promise( (resolve, reject) => {
            (function type() {
                text = fullContent.slice(0, ++i);
                curentBotLine.innerHTML = currentMsgContent + text;
                setTimeout(type, 60);
                if (text === fullContent){
                    resolve()
                }  
            })()
        }) 
        await typing;
        await this.closeBotLine(chatBox)
        this.activateUserInput(chatBox);
        return
    }

    openBotLine(chatBox) {
        return new Promise( (resolve, reject) => {
            chatBox.scrollTop = chatBox.scrollHeight;
            chatBox.querySelector('.chatbox__messages').innerHTML += this.getBotMessageHTML()   // initialize bot-message line-id and push first message
            setTimeout(() => {
                resolve()
            }, 500);    // lets line blinking for setTimeOut ms before resolving
        })
    }

    closeBotLine(chatBox) {
        // removes blinking-caret from Bot last message
        return new Promise( (resolve, reject) => {
            var botMessages = chatBox.getElementsByClassName("messages__bot");
            setTimeout(() => {
                botMessages[botMessages.length - 1].classList.remove("caret")
                resolve()
            }, 1500);
        })
    }

    activateUserInput(chatBox) {  
        chatBox.scrollTop = chatBox.scrollHeight;      
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = this.user;     // activates user-id and blinking caret on user-input line
        chatBox.querySelector('input').classList.add("caret") 
        chatBox.querySelector("input").style.width = "1ch";                         // set input-tag size back to 1 character-size
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