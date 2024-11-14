/*shared*/
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
for (let drop of document.getElementsByClassName("section_dropdown_title")) {
    drop.addEventListener("click", () => {
        let sibling = drop.nextElementSibling;
        if (!sibling.checkVisibility({ checkVisibilityCSS: true })) {
            sibling.style.height = "auto";
            sibling.style.visibility = "visible";
        }
        else {
            sibling.style.height = "0px";
            sibling.style.visibility = "hidden";
            for (let d of sibling.children) {
                if (d.className == "sub_section_dropdown") {
                    for (let t of d.children) {
                        if (t.className == "sub_section_dropdown_title") {
                            let ss = t.nextElementSibling;
                            if (ss.checkVisibility({ checkVisibilityCSS: true })) {
                                t.click();
                            }
                        }
                    }
                }
            }
        }
    });
}
for (let drop of document.getElementsByClassName("sub_section_dropdown_title")) {
    drop.addEventListener("click", () => {
        let sibling = drop.nextElementSibling;
        if (!sibling.checkVisibility({ checkVisibilityCSS: true })) {
            sibling.style.height = "auto";
            sibling.style.visibility = "visible";
        }
        else {
            sibling.style.height = "0px";
            sibling.style.visibility = "hidden";
        }
    });
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
/*shared*/