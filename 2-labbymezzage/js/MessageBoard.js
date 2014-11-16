'use strict';

var MessageBoard = {
    
    messages: [],
    
    init: function(){
        
        MessageBoard.countMessages();
        
        var submit = document.getElementById("send");
        submit.onclick = MessageBoard.createMessage;
        
        var focus = document.getElementById("formtext");
        // Sätter en blinkande markör i textarean
        focus.focus();
        focus.onkeypress = function(e){
		if(!e){ e=window.event; }
		    if(e.keyCode == 13 && !e.shiftKey){
		        e.preventDefault();
		        MessageBoard.createMessage();
		    }
        };
    },
    // Skapa meddelanden
    createMessage: function(){
        var input = document.getElementById("formtext");
        MessageBoard.messages.push( new Message(input.value, new Date()) );
        MessageBoard.renderMessages();
    },
    
    // Rendera alla meddelanden
    renderMessages: function(){
        //Tar bort alla meddelanden
        document.getElementById("messagearea").innerHTML = "";
        for (var i = 0; i < MessageBoard.messages.length; ++i){
        MessageBoard.renderMessage(i);
        }
        document.form.formtext.value = "";
        document.form.formtext.focus();
    },
    // Skriv ut ett meddelande
    renderMessage: function(messageID){

        var input = document.createElement("p");
        input.className = "input";
        input.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        var textContainer = document.createElement("div");
        textContainer.className = ("textContainer");
        textContainer.appendChild(input);
        
        var time = document.createElement("p");
        time.className = "time";
        time.innerHTML = MessageBoard.messages[messageID].getDateText();
		
		var imageClock = document.createElement("a");
		imageClock.setAttribute("href", "#");
		imageClock.innerHTML = '<img src="pics/clock.png" title="Se när meddelandet skapades." alt="Clock" width="24px" height="24px" />';

		var imageRemove = document.createElement("a");
		imageRemove.setAttribute("href", "#");
		imageRemove.innerHTML = '<img src="pics/delete.png" title="Ta bort det här meddelandet." alt="Delete" width="24px" height="24px" />';
		
        var detailsContainer = document.createElement("div");
        detailsContainer.className = "detailsContainer";
		detailsContainer.appendChild(imageClock);
		detailsContainer.appendChild(imageRemove);
		detailsContainer.appendChild(time);
		
        var messageContainer = document.createElement("div");
        messageContainer.className = "messageContainer";
        messageContainer.appendChild(textContainer);
        messageContainer.appendChild(detailsContainer);

		var container = document.getElementById("messagearea");
		container.appendChild(messageContainer);
		
		MessageBoard.countMessages();
		
		imageRemove.onclick = function(){
		    if (window.confirm("Vill du ta bort detta meddelande?")){
		    MessageBoard.removeMessage(messageID);		        
		    }
		};
		
		imageClock.onclick = function(){
		  MessageBoard.getTimestamp(messageID);  
		};
    },
    
    removeMessage: function(messageID){
        MessageBoard.messages.splice(messageID, 1);

        MessageBoard.countMessages();
        
        MessageBoard.renderMessages();
    },
    
    getTimestamp: function(messageID){
        alert(MessageBoard.messages[messageID].getTimeDetails());
    },
    
    // Sätter räknare för antalet meddelanden
    countMessages: function(){
        var counter = document.getElementById("counter");
        counter.innerHTML = MessageBoard.messages.length;
    }
    
};

window.onload = MessageBoard.init;