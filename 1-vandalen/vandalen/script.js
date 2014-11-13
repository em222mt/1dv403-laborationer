"use strict";

var makePerson = function(persArr){

    var i = 0;
    var averageAge = 0;
    var ages = [];
    var names = [];
	
    for(i = 0; i < persArr.length; i+=1){
        names[i] = persArr[i].name;
        ages[i] = persArr[i].age;
        averageAge += persArr[i].age;
    }
   
};    
	
    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
 
    var result = makePerson(data);
 
    console.log(result);