"use strict";

var quiz = {
    
    tries: [],
    count: 0,
    jsonResponse: [],
    qURL: "http://vhost3.lnu.se:20080/question/1",
    
    init: function(){
        var submit = document.getElementById("button");
        var submit2 = document.getElementById("button2");
        submit2.setAttribute("class", "hide");
        
        submit.onclick = function(){
            submit.setAttribute("class", "hide");
            submit2.removeAttribute("class", "hide");
            quiz.createElements();
            quiz.getQ();
        };
    },
    createElements: function(){
      var div = document.getElementById("question");
      var p = document.createElement("p");
      
      var answer = document.createElement("input");
      answer.setAttribute("type", "text");
      answer.setAttribute("id", "answer");
      answer.setAttribute("placeholder", "Skriv ditt svar här...");
      
      var wrapper = document.getElementById("buttondiv");
	  p.setAttribute("class", "p");
	  p.setAttribute("id", "p");

	  div.appendChild(p);
	  wrapper.insertBefore(answer, wrapper.childNodes[0]);

	  answer.focus();
    },
    getQ: function(){
        var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
					quiz.response = JSON.parse(xhr.responseText);
					quiz.showQuestion(JSON.parse(xhr.responseText));
					quiz.sendAnswer(JSON.parse(xhr.responseText));
			}
		};

		xhr.open("GET", quiz.qURL, true);
		xhr.send(null);
    },
    showQuestion: function(textQ){
        var q = document.getElementById("p");
        
        if("question" in textQ){
			q.innerHTML = textQ.question;
		} 
		else{
			q.innerHTML = textQ.message;
		}
    },
    sendAnswer: function(textA){
        console.log("sendAnswer");
        var answer = document.getElementById("answer");
        var submit = document.getElementById("button2");
        var submitAnswer = {};
        
        submit.onclick = function(){
            quiz.count += 1;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        quiz.tries.push(quiz.count);
						quiz.count = 0;
						
                        quiz.jsonResponse = JSON.parse(xhr.responseText);
                        if ("nextURL" in quiz.jsonResponse) {
                            quiz.showQuestion(JSON.parse(xhr.responseText));
                            quiz.qURL = quiz.jsonResponse.nextURL;
                            setTimeout(function(){
                                answer.value = "";
                                answer.focus();
								quiz.getQ();
							}, 750);
                        }
                        else{
                            quiz.showResult();
                        }
                    }
                    else{
                        quiz.wrongAnswer(quiz.jsonResponse);
                    }
                }
                else{
                    console.log("Läsfel, status: " + xhr.status);
                }
            };
            xhr.open("POST", textA.nextURL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            submitAnswer = {
              "answer": answer.value
            };
            xhr.send(JSON.stringify(submitAnswer));
        };
    },
    wrongAnswer: function(response){
        console.log(response);
        var w = document.getElementById("p");
        var answer = document.getElementById("answer");
        w.innerHTML = "Wrong answer! :(";
        setTimeout(function() {
            w.innerHTML = "";
            answer.value = "";
            answer.focus();
            quiz.getQ();
        }, 1000);
    },
    showResult: function(){
        var result = document.getElementById("p");
        result.innerHTML = "";
        var div = document.getElementById("question");
        
        for (var i = 0; i < quiz.tries.length; i+=1) {
            var p = document.createElement("p");
            p.innerHTML = "Du behövde " + quiz.tries[i] + " försök för att klara fråga " + (i+1);
            div.appendChild(p);
        }
        
    }
    
};
window.onload = quiz.init;