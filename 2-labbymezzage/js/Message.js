'use strict';

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
}

Message.prototype.toString = function() {
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "</br>");
};

Message.prototype.getDateText = function(){
    var now = this.getDate();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    
    //IF-sats för att lägga till nollor som i C#?
    
    var formattedTime = hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return formattedTime;
};

Message.prototype.getTimestamp = function(){
    
};
