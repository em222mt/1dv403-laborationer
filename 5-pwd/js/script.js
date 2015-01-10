"use strict";

var Project = {
    //Array för bilder
    pics: [],
    
    
    init: function(){
        Project.createGallery();
        Project.getImages();
        console.log(Project.pics);

    },
    //Skapar bildgalleriet
    createGallery: function(){
        
        var gallery = document.createElement("div");
        gallery.setAttribute("class", "gallery");
        gallery.setAttribute("id", "gallery");
        
        var topBar = document.createElement("div");
        topBar.setAttribute("class", "topbar");
        topBar.setAttribute("id", "topbar");
        var closeImage = document.createElement("img");
        closeImage.setAttribute("src", "pics/close.png");
        closeImage.setAttribute("id", "closeimage");
        var closeIcon = document.createElement("a");
        closeIcon.setAttribute("class", "closeicon");
        closeIcon.setAttribute("href", "#");
        closeIcon.appendChild(closeImage);
        topBar.appendChild(closeIcon);
        
        var bottomBar = document.createElement("div");
        bottomBar.setAttribute("class", "bottombar");
        bottomBar.setAttribute("id", "bottombar");
        
        var body = document.getElementById("desktop");
        body.appendChild(topBar);
        body.appendChild(gallery);
        body.appendChild(bottomBar);
        console.log("hej");
        
    },
    //Hämtar bilder och lägger dom i picssarrayen
    getImages: function(){
        Project.createLoadingBar();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    Project.pics = JSON.parse(xhr.responseText);
                    
                    //Skapar struktur för thumbnails
                    for (var i = 0; i < Project.pics.length; i+=1) {
                        console.log("hej igen");
                        var box = document.createElement("div");
                        box.setAttribute("class", "box");
                        
                        var thumbNail = document.createElement("img");
                        thumbNail.setAttribute("src", Project.pics[i].thumbURL);
                        thumbNail.setAttribute("class", "thumb");
                        thumbNail.style.maxWidth = Project.pics[i].thumbWidth;
                        thumbNail.style.maxHeight = Project.pics[i].thumbHeight;
                        
                        var thumbLink = document.createElement("a");
                        thumbLink.setAttribute("href", "#");
                        thumbLink.setAttribute("class", "thumblink");
                        
                        thumbLink.appendChild(thumbNail);
                        box.appendChild(thumbLink);
                        
                        var temp = document.getElementById("gallery");
                        temp.appendChild(box);
                    }
                    Project.removeLoadingBar();
                }
                
                else{
                    alert("Läsfel status: " + xhr.status);
                }
            }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
    
    createLoadingBar: function(){
        var bottom = document.getElementById("bottombar");
            
        var loadingGif = document.createElement("img");
        loadingGif.setAttribute("src", "pics/loader.gif");
        loadingGif.setAttribute("id", "loadinggif");
        
        var loadingText = document.createElement("p");
        loadingText.setAttribute("id", "loadingtext");
        loadingText.innerHTML = "Laddar bilder...";
        
        bottom.appendChild(loadingText);
        bottom.appendChild(loadingGif);
    },
    
    removeLoadingBar: function(){
        var bottom = document.getElementById("bottombar");
        // setTimeout(function(){ 
            while (bottom.firstChild) {
                bottom.removeChild(bottom.firstChild);
            }
            // }, 2000);
        // while (bottom.firstChild) {
        //     bottom.removeChild(bottom.firstChild);
        
        
    },
    
};
window.onload = Project.init;