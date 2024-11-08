/*shared*/
var theme_toggle = document.getElementById("menu_settings_theme_toggle");
var menu = document.getElementById("menu");
var menu_button = document.getElementById("menu_button");
toggle_theme();

theme_toggle.addEventListener("change", toggle_theme);
menu_button.addEventListener("click", toggle_menu);
menu_button.addEventListener("touchstart", (e) => { e.preventDefault(); toggle_menu(); });
for (let button of document.getElementsByClassName("menu_button")) {
    button.addEventListener("click", toggle_menu);
}
for (let drop of document.getElementsByClassName("section_dropdown_title")) {
    drop.addEventListener("click", () => {
        let sibling = drop.nextElementSibling;
        if (!sibling.checkVisibility({ checkVisibilityCSS: true })) {
            sibling.style.height = "auto";
            sibling.style.visibility = "visible";
            let coords = sibling.getBoundingClientRect();
            window.scrollTo(0, coords.y + window.scrollY - coords.height);
        }
        else {
            sibling.style.height = "0px";
            sibling.style.visibility = "hidden";
            let coords = drop.getBoundingClientRect();
            window.scrollTo(0, window.scrollY - coords.height);
        }
    });
}
for (let drop of document.getElementsByClassName("sub_section_dropdown_title")) {
    drop.addEventListener("click", () => {
        let sibling = drop.nextElementSibling;
        if (!sibling.checkVisibility({ checkVisibilityCSS: true })) {
            sibling.style.height = "250px";
            sibling.style.visibility = "visible";
            console.log(sibling.getBoundingClientRect() + window.scrollY);
        }
        else {
            sibling.style.height = "0px";
            sibling.style.visibility = "hidden";
            console.log(drop.getBoundingClientRect() + window.scrollY);
        }
    });
}

function toggle_theme() {
    var currentTheme = document.documentElement.getAttribute("display_mode");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.documentElement.setAttribute('display_mode', targetTheme)
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
/*shared*/