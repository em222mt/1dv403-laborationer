"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			// Hittad kod. Hur fungerar det exakt?
			var ex = /^\(?([0-9]{4})\)?[-]([0-9]{2})?[-]([0-9]{2})$/;
			if(!ex.test(date)){
			throw new SyntaxError("Datumet har fel format! Ange ett datum enligt YYYY-MM-DD.");
			}
			// Sätter timmar till noll för att datumet ska bli rätt efter 12:00
			var today = new Date();
			today.setHours(0,0,0,0);
			
			date = new Date(date);
			date.setHours(0,0,0,0);
			
			date.setFullYear(today.getFullYear());
			// Plussar på ett år om datumet redan varit i år.
			if (date < today) {
				date.setFullYear(today.getFullYear() + 1);
			}
			
			var day = 1000 * 60 * 60 * 24;
			var daysLeft = Math.round((date.getTime() - today.getTime()) / day);
			
			return daysLeft;
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};