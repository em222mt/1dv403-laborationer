"use strict";

var Project = {
    thumbs: [],
    init: function(){
        Project.getImages();
        console.log(Project.thumbs);
    },
    getImages: function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            
            if (xhr.status == 200) {
                console.log("Hej");
                console.log(xhr.responseText);
                Project.thumbs = JSON.parse(xhr.responseText);
            }
        }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
    renderImages: function(){
        
    },
    
};
window.onload = Project.init;