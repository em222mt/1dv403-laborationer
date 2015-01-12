        Project.galleryIcon.onclick = function(){
            if (Project.open === false) {    
                Project.open = true;
                if (Project.open && Project.counter === 0) {
                    Project.counter += 1;
                    Project.createGallery();
                    Project.getImages();
                }
                var desktop = document.getElementById("desktop");                    
                Project.closeIcon.onclick = function(){
                    Project.removeNodes(desktop);
                };
            }
            else{
                console.log("Window already open.");
            }
        
        };    
        console.log("1");