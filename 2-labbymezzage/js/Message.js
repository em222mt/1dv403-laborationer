'use strict';
// Konstruktorfunktion för att skapa ett meddelandeobjekt.
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
// Hämtar texten och ersätter </br> med \n.
Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "</br>");
};
// Hämtar tiden då ett meddelande skrevs...
Message.prototype.getDateText = function(){
    var now = this.getDate();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    //...och returnerar en formaterad sträng då sekunder och minuter är mindre än 10.
    return hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

};
// Hämtar en tidsstämpel med datum och tid.
Message.prototype.getTimeDetails = function(){
    var date = this.getDate();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    return "Postat den " + year + "/" + (month + 1) + "/" + day + " " + this.getDateText();
};
