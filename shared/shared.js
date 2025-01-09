var theme_toggle = document.getElementById("menu_settings_theme_toggle");
var menu = document.getElementById("menu");
var menu_button = document.getElementById("menu_button");
document.documentElement.setAttribute("display_mode", localStorage.getItem('themePreference') === "dark" ? "dark" : "light");

menu_button.addEventListener("click", toggle_menu);
menu_button.addEventListener("touchstart", (e) => { e.preventDefault(); toggle_menu(); });
for (let button of document.getElementsByClassName("menu_button")) {
    button.addEventListener("click", toggle_menu);
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