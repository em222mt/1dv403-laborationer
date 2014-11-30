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

    },
    //Håller reda på räknare och skriver ut resultat vid vinst
    countParameters: function(){
    }
};

window.onload = Memory.init;