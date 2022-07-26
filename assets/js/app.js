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
        this.inputBlur = false
    }

    displayChatBox() {
        const {chatBox} = this.components

        // initial page message
        this.pushBotMsg(chatBox, this.initMessage, fetch=false)
        
        // listener: user input text
        var input = chatBox.querySelector('#chatbox__input-user_message');
        input.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })

        // listener: resize user-input element
        input.addEventListener('input', resizeInput);   // bind the "resizeInput" callback on "input" event
        resizeInput.call(input);                        // immediately call the function
        function resizeInput() {
            this.style.width = this.value.length + "ch";
        }

        input.addEventListener("blur", () => {
            if (!this.inputBlur) {
                input.focus()
            }
        })

        // listener: adjust scrolling given element size change
        const resize_ob = new ResizeObserver(function(entries) {
            let messagesEl = entries[0].target;     // observe single element (first element in entries array)
            messagesEl.scrollIntoView(false)
        });
        resize_ob.observe(document.querySelector("#chatbox__messages")); // start observing for resize
    }

    onSendButton(chatBox) {
        var textField = chatBox.querySelector('#chatbox__input-user_message');
        let textInput = textField.value

        if (textInput === "") {             // empty input
            this.pushUserMsg(chatBox, textInput, false);
            this.activateUserInput(chatBox)
            return; 
        }
        if (textInput === "clear") {        // clear command
            this.clearPrompt(chatBox);
            return;
        }

        // push messages to chat area
        this.pushUserMsg(chatBox, textInput);
        this.pushBotMsg(chatBox);
    }
    
    pushUserMsg(chatBox, message, save=true) {
        this.deactivateUserInput(chatBox);
        if (save) { this.saveMsg("User", message); }
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getUserMessageHTML(message)   // update page with formatted user-input html
    }

    async pushBotMsg(chatBox, textInput, fetch=true) {
        await this.openBotLine(chatBox);
        
        let botAnswer;
        if (!fetch) { botAnswer = textInput}
        else {
            botAnswer = await this.fetchBotMsg(textInput); 
        }
        
        let name, text;
        if(botAnswer === 'error'){
            name = 'error';
            text = this.errorText;
        } else {
            name = this.name;
            text = botAnswer;
        }
        this.saveMsg(name, text);
        await this.typeBotText(chatBox, text);
        this.activateUserInput(chatBox);
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
                result = 'error';
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
        return
    }

    openBotLine(chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
        chatBox.querySelector('.chatbox__messages').innerHTML += this.getBotMessageHTML()   // initialize bot-message line-id and push first message
        return new Promise( (resolve, reject) => {
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
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = this.user;     // activates user-id
        const inputEl = chatBox.querySelector('#chatbox__input-user_message')
        inputEl.style.width = "1ch";    // set input-tag size back to 1 character-size
        inputEl.classList.add("caret")  // set blinking caret on user-input line
        inputEl.focus()                 // set element on focus
        this.inputBlur = false;
        chatBox.querySelector("#chatbox__input").scrollIntoView(false)
    }

    deactivateUserInput(chatBox) {
        const inputEl = chatBox.querySelector('#chatbox__input-user_message');
        inputEl.value = '';                 // clears input text
        inputEl.classList.remove("caret");  // clear (hide) blinking-caret from input line
        this.inputBlur = true;
        inputEl.blur();                     // remove element focus
        chatBox.querySelector('#chatbox__input-user_id').innerHTML = '';    // clears the user-id for the bot answer
    }

    getBotMessageHTML() {
        return '<div class="prompt__text messages__item messages__bot caret">' + this.prefix + '</div>'
    }

    getUserMessageHTML(message) {
        return '<div class="prompt__text messages__item">' + this.user + message + '</div>'
    }

    clearPrompt(chatBox) {
        this.deactivateUserInput(chatBox)
        chatBox.querySelector("#chatbox__messages").innerHTML = '<div></div>'
        this.activateUserInput(chatBox)
    }
}

const tc = new TerraCognitaLP();
tc.displayChatBox();