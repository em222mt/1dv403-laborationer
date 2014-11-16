'use strict';

var MessageBoard = {
    
    messages: [],
    
    init: function(){

        var submit = document.getElementById("send");
        submit.onclick = MessageBoard.createMessage;
        
        var focus = document.getElementById("formtext");
        // Sätter en blinkande markör i textarean
        focus.focus();
        focus.onkeypress = function(e){
		if(!e){ e=window.event; }
		    if(e.keyCode == 13 && !e.shiftKey){
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
        
        var timeContainer = document.createElement("p");
        timeContainer.className = "timeSection";
        timeContainer.innerHTML = MessageBoard.messages[messageID].getDateText();
        
        var textContainer = document.createElement("div");
        textContainer.className = "textSection";
        textContainer.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		
		var imageClock = document.createElement("a");
		imageClock.setAttribute("href", "#");
		imageClock.innerHTML = '<img src="pics/clock.png" title="Se när meddelandet skapades." alt="Clock" width="24px" height="24px" />';

		var imageRemove = document.createElement("a");
		imageRemove.setAttribute("href", "#");
		imageRemove.innerHTML = '<img src="pics/delete.png" title="Ta bort det här meddelandet." alt="Delete" width="24px" height="24px" />';
		
		var links = document.createElement("div");
		links.className = "links";
		links.appendChild(imageClock);
		links.appendChild(imageRemove);
		links.appendChild(timeContainer);

		textContainer.appendChild(links);

		var container = document.getElementById("messagearea");
		container.appendChild(textContainer);
		
		MessageBoard.countMessages();
		
		imageRemove.onclick = function(){
		    MessageBoard.removeMessage(messageID);
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