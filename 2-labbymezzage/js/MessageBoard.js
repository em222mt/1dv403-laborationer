'use strict';

var MessageBoard = {
    
    messages: [],
    
    init: function(e){
        // var mess = new Message();
        var text = document.getElementById("formtext");
        
        var submit = document.getElementById("send");
    },
    
    // renderMessages: function(){
    //     //Ta bort alla meddelanden
    //     document.getElementById("formtext".innerHTML = "");
        
    //     //Rendera alla meddelanden
    //     for (var i = 0; i < MessageBoard.messages.length; ++i){
    //         MessageBoard.renderMessage(i);
    //     }
    // },
    
    // renderMessage: function(text){
    //     //Kod här för att ta bort ett meddelande.
    // }
    
};

window.onload = MessageBoard.init;