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
