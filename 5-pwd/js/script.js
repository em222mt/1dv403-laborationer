"use strict";

var Project = {
    //Array för bilder
    pics: [],
    //Sparade DOM-anrop
    desktop: 0,
    gallery: 0,
    topBar: 0,
    bottomBar: 0,
    closeImage: 0,
    closeIcon: 0,
    box: 0,
    thumbNail: 0,
    thumbLink: 0,
    
    init: function(){
        Project.createGallery();
        Project.getImages();

        Project.closeIcon.onclick = function(){
            var d = document.getElementById("desktop");
            Project.removeNodes(d);
        };
    },
    //Skapar bildgalleriet
    createGallery: function(){
        Project.body = document.getElementById("desktop");
        
        Project.gallery = document.createElement("div");
        Project.gallery.setAttribute("class", "gallery");
        Project.gallery.setAttribute("id", "gallery");
        
        Project.topBar = document.createElement("div");
        Project.topBar.setAttribute("class", "topbar");
        Project.topBar.setAttribute("id", "topbar");
        
        Project.closeImage = document.createElement("img");
        Project.closeImage.setAttribute("src", "pics/close.png");
        Project.closeImage.setAttribute("id", "closeimage");
        
        Project.closeIcon = document.createElement("a");
        Project.closeIcon.setAttribute("class", "closeicon");
        Project.closeIcon.setAttribute("href", "#");
        Project.closeIcon.appendChild(Project.closeImage);
        
        Project.topBar.appendChild(Project.closeIcon);
        
        Project.bottomBar = document.createElement("div");
        Project.bottomBar.setAttribute("class", "bottombar");
        Project.bottomBar.setAttribute("id", "bottombar");

        Project.body.appendChild(Project.topBar);
        Project.body.appendChild(Project.gallery);
        Project.body.appendChild(Project.bottomBar);
    },
    //Hämtar bilder och lägger dom i picssarrayen
    getImages: function(){
        //Skapar laddningsbar
        Project.createLoadingBar();
        //Gör ett ett AJAX-anrop
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    Project.pics = JSON.parse(xhr.responseText);
                    // console.log(xhr.responseText);
                    
                    //Skapar struktur för thumbnails
                    Project.pics.forEach(function(pic){
                        Project.box = document.createElement("div");
                        Project.box.setAttribute("class", "box");
                        
                        Project.thumbNail = document.createElement("img");
                        Project.thumbNail.setAttribute("src", pic.thumbURL);
                        Project.thumbNail.setAttribute("class", "thumb");
                        Project.thumbNail.style.maxWidth = pic.thumbWidth;
                        Project.thumbNail.style.maxHeight = pic.thumbHeight;
                        
                        Project.thumbLink = document.createElement("a");
                        Project.thumbLink.setAttribute("href", "#");
                        Project.thumbLink.setAttribute("class", "thumblink");
                        
                        Project.thumbLink.appendChild(Project.thumbNail);
                        Project.box.appendChild(Project.thumbLink);
                        
                        Project.gallery.appendChild(Project.box);

                        Project.thumbLink.onclick = function(){
                            var link = pic.URL;

                            var background = document.getElementById("background");
                            background.style.backgroundImage = "url(" + link + ")";
                        };
                    });
                    //Tar bort laddningsbar
                    Project.removeNodes(Project.bottomBar);
                }
                //Ger en alertruta om AJAX-anropet misslyckas.
                else{
                    alert("Läsfel status: " + xhr.status);
                }
            }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
    //Skapar en laddningsbar
    createLoadingBar: function(){
            
        var loadingGif = document.createElement("img");
        loadingGif.setAttribute("src", "pics/loader.gif");
        loadingGif.setAttribute("id", "loadinggif");
        
        var loadingText = document.createElement("p");
        loadingText.setAttribute("id", "loadingtext");
        loadingText.innerHTML = "Laddar bilder...";
        
        Project.bottomBar.appendChild(loadingText);
        Project.bottomBar.appendChild(loadingGif);
    },
    //Tömmer noder
    removeNodes: function(param){
        while (param.firstChild) {
            param.removeChild(param.firstChild);
        }
    },
};
window.onload = Project.init;