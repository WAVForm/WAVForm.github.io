document.getElementById("menu-open").addEventListener("click", (event)=>{
    console.log("Open");
});
document.getElementById("menu-close").addEventListener("click", (event)=>{
    console.log("Close");
});
for(var elem of document.getElementsByClassName("sub-section-container")){
    let tempElem = elem;
    tempElem.addEventListener("click", (event)=>{
        for(var child of document.getElementsByClassName("sub-section-content")){
            if(child.parentElement == tempElem){
                child.style.display = (child.style.display != "flex")?"flex":"none";
            }
        }
    });
}
