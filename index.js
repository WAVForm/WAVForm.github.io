let slideshow_image_paths = {
    slideshow_about_dev: ["images/email.svg", "images/github.svg", "images/instagram.svg", "images/linkedin.svg"],
    slideshow_about_photo: ["images/email.svg", "images/github.svg", "images/instagram.svg", "images/linkedin.svg"],
    slideshow_about_music: ["images/email.svg", "images/github.svg", "images/instagram.svg", "images/linkedin.svg"],
    slideshow_about_diy: ["images/email.svg", "images/github.svg", "images/instagram.svg", "images/linkedin.svg"]
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

for (let slideshow of document.getElementsByClassName("section_dropdown_content_slideshow")) {
    let images = slideshow_image_paths[slideshow.id];
    let index = images.length;
    let can = true;
    let left = slideshow.children[0];
    let image = slideshow.children[1];
    let right = slideshow.children[2];
    function next_img(start) {
        if (can && slideshow.parentElement.style.visibility == "visible" || start) {
            can = false;
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            image.src = images[index];
            setTimeout(() => { can = true; }, 100);
        }
    }
    function prev_img() {
        if (can && slideshow.parentElement.style.visibility == "visible") {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            image.src = images[index];
            setTimeout(() => { can = true; }, 100);
        }
    }
    next_img(true);
    setInterval(next_img, 3000);
    left.addEventListener("click", prev_img);
    right.addEventListener("click", next_img);
}