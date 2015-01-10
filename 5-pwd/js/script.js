"use strict";

var Project = {
    //Array för bilder
    pics: [],
    
    init: function(){
        Project.createGallery();
        Project.getImages();
    },
    //Skapar bildgalleriet
    createGallery: function(){
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");
        wrapper.setAttribute("id", "wrapper");
        
        var gallery = document.createElement("div");
        gallery.setAttribute("class", "gallery");
        gallery.setAttribute("id", "gallery");
        
        var topBar = document.createElement("div");
        topBar.setAttribute("class", "topbar");
        topBar.setAttribute("id", "topbar");
        
        var bottomBar = document.createElement("div");
        bottomBar.setAttribute("class", "bottombar");
        bottomBar.setAttribute("id", "bottombar");
        
        wrapper.appendChild(topBar, gallery, bottomBar);
        
        var body = document.getElementById("background");
        body.appendChild(wrapper);
        
    },
    //Hämtar bilder och lägger dom i picssarrayen
    getImages: function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    Project.pics = JSON.parse(xhr.responseText);
                    
                    //Skapar struktur för thumbnails
                    for (var i = 0; i < Project.pics.length; i+=1) {
                        var box = document.createElement("div");
                        box.setAttribute("class", "box");
                        
                        var thumbNail = document.createElement("img");
                        thumbNail.setAttribute("src", Project.pics[i]);
                        thumbNail.style.maxWidth = Project.pics[i].thumbWidth;
                        thumbNail.style.maxHeight = Project.pics[i].thumbHeight;
                        
                        var thumbLink = document.createElement("a");
                        thumbLink.setAttribute("href", "#");
                        
                        thumbLink.appendChild(thumbNail);
                        box.appendChild(thumbLink);
                        
                        var gallery = document.getElementById("gallery");
                        gallery.appendChild(box);
                        
                    }
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