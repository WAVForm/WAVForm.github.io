/*shared*/
var theme_toggle = document.getElementById("menu_settings_theme_toggle");
toggle_theme();

theme_toggle.addEventListener("change", toggle_theme);

function toggle_theme(){
    var currentTheme = document.documentElement.getAttribute("display_mode");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.documentElement.setAttribute('display_mode', targetTheme)
}
/*shared*/

let today = new Date();
let bday = new Date(2002,2,15);
let millisecsInYear = 365*24*60*60*1000;
let age = parseInt((today - bday)/millisecsInYear);
//document.getElementById("about-me-age").innerHTML = age;