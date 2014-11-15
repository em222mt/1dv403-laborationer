'use strict';

var MessageBoard = {
    
    messages: [],
    
    init: function(){

        var submit = document.getElementById("send");
        submit.onclick = MessageBoard.createMessage;
    },
    
    createMessage: function(){
        var input = document.getElementById("formtext");
        MessageBoard.messages.push( new Message(input.value, new Date()));
        MessageBoard.renderMessages();
    },
    
    renderMessages: function(){
        document.getElementById("formtext".innerHTML = "");
        //Rendera alla meddelanden
        for (var i = 0; i < MessageBoard.messages.length; ++i){
        MessageBoard.renderMessage(i);
        }
        
    },
    renderMessage: function(){
        
    }
    
    
        
};

window.onload = MessageBoard.init;