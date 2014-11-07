"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1; 
	var numberOfGuesses = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret);
		console.log("Du gissade: " + number);
			
		// Plats för förändring.
		if(numberOfGuesses < 7){
	
			if (number < 1 || number > 100){
				return [false, "Du måste gissa på ett tal mellan 1-100!"];
			}
			else if (number > secret){
				numberOfGuesses+=1;
				return [false, "Talet du gissat på är för stort!\nÅterstående gissningar: " + (7 - numberOfGuesses)];
			}
			else if (number < secret){
				numberOfGuesses+=1;
				return [false, "Talet du gissat på är för litet!\nÅterstående gissningar: " + (7 - numberOfGuesses)];
			}
			else{
				numberOfGuesses+=1;
				return [true, "Grattis! Det hemliga talet var " + secret + " och du behövde " + numberOfGuesses + " gissningar för att hitta det." ];
			}
		}
		else{
			return [false, "Fail! Det hemliga talet var " + secret + " och du klarade det inte med dina " + numberOfGuesses + " gissningar." ];
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};