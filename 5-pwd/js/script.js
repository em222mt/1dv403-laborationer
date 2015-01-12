"use strict";

var Project = {
    //Array för bilder
    pics: [],
    //Sparade DOM-anrop
    open: false,
    desktop:        0,
    gallery:        0,
    topBar:         0,
    topBarIcon:     0,
    topBarIconLink: 0,
    topBarText:     0,
    bottomBar:      0,
    closeImage:     0,
    closeIcon:      0,
    box:            0,
    thumbNail:      0,
    thumbLink:      0,
    galleryIcon: document.getElementById("galleryicon"),
    
    init: function(){
        //Sätter onclickfunktion på galleriikonen
        Project.galleryIcon.onclick = function(){
            //Förhindrar att ett nytt fönster öppnas om ett redan är öppet
            if (Project.open === true) { 
                return false;
            }
            //Öppnar ett nytt galleri
            else{
                Project.open = true;
                Project.createGallery();
                Project.getImages();
                //Stänger galleri vid klick
                var desktop = document.getElementById("desktop");                    
                    Project.closeIcon.onclick = function(){
                        Project.removeNodes(desktop);
                    };
            }
            return false;
        };
    },
    //Skapar bildgalleriet
    createGallery: function(){
        Project.desktop = document.getElementById("desktop");
        
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

        Project.desktop.appendChild(Project.topBar);
        Project.desktop.appendChild(Project.gallery);
        Project.desktop.appendChild(Project.bottomBar);
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
                    console.log(xhr.responseText);
                    Project.pics = JSON.parse(xhr.responseText);
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
                            Project.setBackground(pic.URL);
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
    //Sätter bakgrundsbild
    setBackground: function(link){
        var background = document.getElementById("wrapper");
        background.style.backgroundImage = "url(" + link + ")";
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
        //Switchar Project.open beroende på state
        if (Project.open === true && param == Project.desktop) {
            Project.open = false;
        }
        //Tar bort barnnoder om barnnoder finns.
        while (param.firstChild) {
            param.removeChild(param.firstChild);
        }
    },
};
window.onload = Project.init;