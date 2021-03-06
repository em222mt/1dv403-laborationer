"use strict";

window.onload = function(){

	var convertString = function(str){
		// Kasta ett fel om strängen är tom
		if (str === " ") {
			throw new Error("Du måste mata in en textsträng!");
		}
		
		str.split("");
		var i = 0;
		var newString = "";
		
		for (i = 0; i < str.length; i+=1) {
			
			var char = str[i];
			// Vänder på gemener och versaler och lägger varje bokstav i ny sträng.
			if (str[i] === char.toUpperCase()){
				newString += str[i].toLowerCase();
			}
			else if (str[i] === char.toLowerCase()){
				newString += str[i].toUpperCase();
			}
		}
		// Returnerar den nya strängen och byter ut a och A mot #.
		return newString.replace(/a/gi, "#");
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};