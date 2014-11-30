'use strict';

var Memory = {
    
    board: [],
    countArray: [],    
    cols: 4,
    rows: 4, 
    pairs: 0,
    tries: 0,

    init: function(){
        //Anropar random.js som "scramblar" arrayen
        Memory.board = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        Memory.createBoard();
    },
    
    createBoard: function(){
        //Skapar en tabellstruktur för bilderna
        var div = document.getElementById("wrapboard");      
        var table = document.createElement("table");

        var counter = 0;
        
        for (var row = 0; row < Memory.cols; row+=1) {
            var tableRow = document.createElement("tr");
            table.appendChild(tableRow);
            
            for (var col = 0; col < Memory.rows; col+=1) {
                var tableCol = document.createElement("td");

                var a = document.createElement("a");
                a.setAttribute("href", "#");               
                
                var backImage = document.createElement("img");
                backImage.setAttribute("src", "memory/pics/0.png");
    
                a.appendChild(backImage);

                tableCol.appendChild(a);
                tableRow.appendChild(tableCol);
                
                Memory.flipBricks(counter, a);
                counter += 1;
            }
            table.appendChild(tableRow);
        }
        div.appendChild(table);
    },

    flipBricks: function(count, link){
        //Gör länkarna klickbara
        link.addEventListener("click", function(){
            //Lägger till ett element i arrayen
            Memory.countArray.push(link);
        
            //Byter bild om kraven uppfylls
            if (Memory.countArray.length === 1 || Memory.countArray.length === 2){
                this.getElementsByTagName("img")[0].setAttribute("src", "memory/pics/" + Memory.board[count] + ".png");
            }
            //Byter tillbaka bilder med ett kort delay
            if(Memory.countArray.length === 2){
                setTimeout(function() {
                    Memory.countParameters(Memory.countArray);
                }, 750);
            }
        });
    },
    //Håller reda på räknare och skriver ut resultat vid vinst
    countParameters: function(array){
        //Om de klickade bilderna är ett par, lämna dom "flippade"...
        if (array[0].getElementsByTagName("img")[0].getAttribute("src") === array[1].getElementsByTagName("img")[0].getAttribute("src")){
            Memory.pairs += 1;
            Memory.tries += 1;
            //Vinstparametrar
            if (Memory.pairs === (Memory.cols*Memory.rows) / 2) {
                var result = document.getElementById("result");
                result.innerHTML = "Grattis! Du vann och behövde " + Memory.tries + " försök";
            }
        //...annars vänd tillbaka dom    
        }
        else{
            array[0].getElementsByTagName("img")[0].setAttribute("src", "memory/pics/0.png");
            array[1].getElementsByTagName("img")[0].setAttribute("src", "memory/pics/0.png");
            
            Memory.tries += 1;
        }
        //Tömmer array
        Memory.countArray = [];
    }
};

window.onload = Memory.init;