'use strict';

var MessageBoard = {
    // Variabel för meddelanden
    messages: [],
    
    init: function(){
        // Anropar count och sätter räknaren till 0.
        MessageBoard.countMessages();
        // Förklarar sidan funktion för användaren.
        var textBox = document.getElementById("formtext");
        textBox.placeholder = "Skriv in det meddelande som du vill spara. Enter sparar - shift+enter byter rad.";
        // Skapar ett meddelande då Spara-knappen klickas.
        var submit = document.getElementById("send");
        submit.onclick = MessageBoard.createMessage;
        // Sätter en blinkande markör i textarean.
        textBox.focus();
        // Skapar ett meddelande då entertangenten trycks.
        textBox.onkeypress = function(e){
		if(!e){ e=window.event; }
		    if(e.keyCode == 13 && !e.shiftKey){
		        e.preventDefault();
		        MessageBoard.createMessage();
		    }
        };
    },
    // Skapar ett meddelande om inte rutan är tom.
    createMessage: function(){
        if (document.getElementById("formtext").value === "") {
            return false;
        }
        var input = document.getElementById("formtext");
        MessageBoard.messages.push( new Message(input.value, new Date()) );
        MessageBoard.renderMessages();
    },
    
    // Rendera alla meddelanden
    renderMessages: function(){
        //Tar bort alla meddelanden och skriver ut dom igen.
        document.getElementById("messagearea").innerHTML = "";
        for (var i = 0; i < MessageBoard.messages.length; ++i){
        MessageBoard.renderMessage(i);
        }
        //Tömmer meddelanderutan och sätter en blinkande markör.
        document.form.formtext.value = "";
        document.form.formtext.focus();
    },
    // Skriver ut ett meddelande och skapar en struktur för style.css.
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
		imageClock.innerHTML = '<img src="pics/clock.png" title="Se när meddelandet skapades." alt="Clock" />';

		var imageRemove = document.createElement("a");
		imageRemove.setAttribute("href", "#");
		imageRemove.innerHTML = '<img src="pics/delete.png" title="Ta bort det här meddelandet." alt="Delete" />';
		
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
		
		// Gör bilderna klickbara.
		imageRemove.onclick = function(){
		    if (window.confirm("Vill du ta bort detta meddelande?")){
		    MessageBoard.removeMessage(messageID);		        
		    }
		};
		
		imageClock.onclick = function(){
		  MessageBoard.getTimestamp(messageID);  
		};
    },
    // Raderar ett meddelande och sätter räknaren rätt.
    removeMessage: function(messageID){
        MessageBoard.messages.splice(messageID, 1);

        MessageBoard.countMessages();
        
        MessageBoard.renderMessages();
    },
    // Hämtar den exakt tiden då meddelandet skapades och visar det för användaren i en alertruta.
    getTimestamp: function(messageID){
        alert(MessageBoard.messages[messageID].getTimeDetails());
    },
    
    // Sätter räknare för antalet meddelanden.
    countMessages: function(){
        var counter = document.getElementById("counter");
        counter.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
    }
    
};
// Kör scripten då sidan är färdigladdad.
window.onload = MessageBoard.init;