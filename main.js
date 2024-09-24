let today = new Date();
let bday = new Date(2002,1,15);
let millisecsInYear = 365*24*60*60*1000;
let age = parseInt((today - bday)/millisecsInYear);
document.getElementById("about-me-age").innerHTML = age;

document.getElementById("menu-open").addEventListener("click", (event)=>{
    document.getElementById("menu-dropdown").style.display = "block";
});

document.getElementById("menu-close").addEventListener("click", (event)=>{
    document.getElementById("menu-dropdown").style.display = "none";
});

for(let sectionOpen of document.getElementsByClassName("sub-section-open")){
    let openTemp = sectionOpen;
    openTemp.addEventListener("click", (event)=>{
        if(openTemp.className == "sub-section-open"){
            openTemp.className = "sub-section-close";
            let container = openTemp.parentElement.parentElement;
            for(let child of container.children){
                if(child.className == "sub-section-content"){
                    child.style.display = "flex";
                }
            }
        }
        else if(openTemp.className == "sub-section-close"){
            openTemp.className = "sub-section-open";
            let container = openTemp.parentElement.parentElement;
            for(let child of container.children){
                if(child.className == "sub-section-content"){
                    child.style.display = "none";
                }
            }
        }
    })
}

for(let sectionHeader of document.getElementsByClassName("sub-section-header")){
    let headTemp = sectionHeader;
    headTemp.addEventListener("click", (event)=>{
        let open = sectionHeader.querySelector(".sub-section-open");
        if(open){
            open.click();
        }
        else{
            sectionHeader.querySelector(".sub-section-close").click();
        }
    })
}

for(let sectionContent of document.getElementsByClassName("sub-section-content")){
    let contTemp = sectionContent;
    let stop;
    contTemp.addEventListener("click", (event)=>{
        for(let child of contTemp.children){
            if(child.className == "content-slideshow"){
                if(child.style.display != "flex"){
                    child.style.display = "flex";
                    stop = startSlideShow(child, 5);
                    console.log(stop);
                }
                else{
                    stop();
                    child.style.display = "none";
                }
            }
        }
    })
}

function startSlideShow(slideshow, seconds){
    let intervalID;
    let interval = seconds*1000;
    const fadeIn = [{opacity: 0.0},{opacity: 1.0}]
    const timing = {duration: 500, iterations:1};

    for(let child of slideshow.children){
        child.style.display = "none";
        if(child.id == "0"){
            child.style.display = "flex";
            child.animate(fadeIn, timing);
        }
    }

    function nextInSlideshow(ss){
        if(ss.parentElement.style.display === "none"){
            clearInterval(intervalID);
            return;
        }
        
        let images = 0;
        let currentImage = null;
    
        for(let i = 0; i < ss.children.length; i++){
            let img = ss.children.item(i);
            images += 1;
            if(img.style.display != "none"){
                currentImage = i;
            }
        }
        if(currentImage === null){
            currentImage = 0;
        }
        
        let img = ss.children.item(currentImage);
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
