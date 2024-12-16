var theme_toggle = document.getElementById("menu_settings_theme_toggle");
var menu = document.getElementById("menu");
var menu_button = document.getElementById("menu_button");
document.documentElement.setAttribute("display_mode", localStorage.getItem('themePreference') === "dark" ? "dark" : "light");

theme_toggle.addEventListener("change", toggle_theme);
menu_button.addEventListener("click", toggle_menu);
menu_button.addEventListener("touchstart", (e) => { e.preventDefault(); toggle_menu(); });
for (let button of document.getElementsByClassName("menu_button")) {
    button.addEventListener("click", toggle_menu);
}

function toggle_theme(f) {
    var currentTheme = document.documentElement.getAttribute("display_mode");
    var targetTheme = currentTheme === "dark" ? "light" : "dark";
    var ball = document.getElementById("toggle_ball");
    ball.style.left = ball.style.left === "50px" ? "0px" : "50px";
    document.documentElement.setAttribute('display_mode', targetTheme)
    localStorage.setItem('themePreference', targetTheme);
}

let menu_open = false;
function toggle_menu() {
    if (menu_open) {
        menu.style.visibility = "hidden";
        menu_open = false;
    }
    else {
        menu.style.visibility = "visible";
        menu_open = true;
    }
}