let slideshow_image_paths = {
    slideshow_about_dev: ["images/email.svg", "images/github.svg", "images/instagram.svg", "images/linkedin.svg"],
    slideshow_about_photo: ["images/p1.webp", "images/p2.webp", "images/p3.webp"],
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
    let left = slideshow.children[0];
    let image = slideshow.children[1];
    let right = slideshow.children[2];
    let auto = setInterval(next_img, 3000);
    function next_img(start) {
        if (slideshow.parentElement.style.visibility == "visible" || start)  {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            image.src = images[index];
            clearInterval(auto);
            auto = setInterval(next_img, 3000);
        }
    }
    function prev_img() {
        if (slideshow.parentElement.style.visibility == "visible") {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            image.src = images[index];
            clearInterval(auto);
            auto = setInterval(next_img, 3000);
        }
    }
    left.addEventListener("click", prev_img);
    right.addEventListener("click", next_img);
    next_img(true)
}