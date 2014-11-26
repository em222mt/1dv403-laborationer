'use strict';

// var memory = function(){
//   var cols = 0;
//   var rows =
// };

var Memory = {
    

    images: [],

    
    init: function(){
        
        var cols = 4;
        var rows = 4;
        var board = [];
        var count = 0;
        
        board = RandomGenerator.getPictureArray(rows, cols);
        board.classList.add("memoryBoard");
        
        
    },
    
    
    
};

window.onload = Memory.init;