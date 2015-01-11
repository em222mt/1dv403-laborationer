"use strict";

var Project = {
    //Array för bilder
    pics: [],
    //Sparade DOM-anrop
    open: false,
    desktop: 0,
    gallery: 0,
    topBar: 0,
    topBarIcon: 0,
    topBarIconLink: 0,
    topBarText: 0,
    bottomBar: 0,
    closeImage: 0,
    closeIcon: 0,
    box: 0,
    thumbNail: 0,
    thumbLink: 0,
    galleryIcon: document.getElementById("galleryicon"),
    
    init: function(){

        Project.galleryIcon.onclick = function(){


            if (Project.open === false && !desktop.firstChild) {
                Project.open = true;
                console.log(Project.open);
                Project.createGallery();
                Project.getImages();
            }
            else{
                console.log("false");
                return false;
            }
            var desktop = document.getElementById("desktop");                    
            Project.closeIcon.onclick = function(){
                Project.removeNodes(desktop);
            };  


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
        Project.topBarIcon = document.createElement("img");
        Project.topBarIcon.setAttribute("src", "pics/Imageviewer.png");
        Project.topBarIcon.setAttribute("id", "topbaricon");
        Project.topBarIconLink = document.createElement("a");
        Project.topBarIconLink.setAttribute("href", "#");
        Project.topBarText = document.createElement("p");
        Project.topBarText.setAttribute("id", "topbartext");
        Project.topBarText.innerHTML = "ImageViewer";
        Project.topBarIconLink.appendChild(Project.topBarIcon);
        Project.topBar.appendChild(Project.topBarIconLink);
        Project.topBar.appendChild(Project.topBarText);
        
        Project.closeImage = document.createElement("img");
        Project.closeImage.setAttribute("src", "pics/close.png");
        Project.closeImage.setAttribute("id", "closeimage");
        Project.closeImage.setAttribute("alt", "Close window.");
        
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
                        //Sätter bakgrundsbilden till den klickade thumben.
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
            Project.open = false;
        }
    },
};
window.onload = Project.init;