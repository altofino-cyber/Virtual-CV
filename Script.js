const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector("#menu-icon");
    const nav = document.querySelector(".nav-links");

    menu.onclick = () => {
        nav.classList.toggle("active");
    };

});
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function() {

        setTimeout(() => {
            form.reset();
        }, 1000);

    });

});