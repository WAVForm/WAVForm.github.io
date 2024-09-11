var today = new Date();
var bday = new Date(2002,1,15);
var millisecsInYear = 365*24*60*60*1000;
var age = parseInt((today - bday)/millisecsInYear);
document.getElementById("about-me-age").innerHTML = age;

document.getElementById("menu-open").addEventListener("click", (event)=>{
    document.getElementById("menu-dropdown").style.display = "block";
});
document.getElementById("menu-close").addEventListener("click", (event)=>{
    document.getElementById("menu-dropdown").style.display = "none";
});
for(var elem of document.getElementsByClassName("sub-section-open")){
    let tempElem = elem;
    tempElem.addEventListener("click", (event)=>{
        if(event.target == tempElem){
            for(var content of document.getElementsByClassName("sub-section-content")){
                if(content.parentElement == tempElem.parentElement){
                    content.style.display = (content.style.display != "flex")?"flex":"none";             
                    for(var child of content.children){
                        if(child.className == "content-description"){
                            child.addEventListener("click", expandContent(content, tempElem.parentElement))
                        }
                    }
                }
            }
        }
    });
}

function expandContent(content, container){
    console.log("p is clicked!");
    for(var child of content.children){
        if(child.className == "content-slideshow"){
            const stop = startSlideShow(child, 3000);
            container.addEventListener("click", (event)=>{
                if(container.children.item(0).style.display != "none"){
                    stop();
                }
            })
        }
    }
}

function startSlideShow(slideshow, interval){
    var intervalID;
    const fadeIn = [{opacity: 0.0},{opacity: 1.0}]
    const timing = {duration: 500, iterations:1};

    for(var child of slideshow.children){
        child.style.display = "none";
        if(child.id == "0"){
            child.style.display = "inherit";
            child.animate(fadeIn, timing);
        }
    }

    function nextInSlideshow(ss){
        if(ss.parentElement.style.display === "none"){
            clearInterval(intervalID);
            return;
        }
        
        var images = 0;
        var currentImage = null;
    
        for(var i = 0; i < ss.children.length; i++){
            var img = ss.children.item(i);
            images += 1;
            if(img.style.display != "none"){
                currentImage = i;
            }
        }
        if(currentImage === null){
            currentImage = 0;
        }
        
        var img = ss.children.item(currentImage);
        img.style.display = "none"
        currentImage = (currentImage + 1) % images;

        img = ss.children.item(currentImage)
        img.style.display = "inherit"
        img.animate(fadeIn, timing)
    }

    intervalID = setInterval(nextInSlideshow, interval, slideshow);
    return function stopSlideShow(){
        clearInterval(intervalID);
    }
}
