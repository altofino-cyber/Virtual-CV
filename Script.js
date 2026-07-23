// =========================================
// SELECT ALL SECTIONS AND NAVIGATION LINKS
// =========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// =========================================
// HIGHLIGHT ACTIVE NAVIGATION LINK
// =========================================

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

// =========================================
// MOBILE NAVIGATION MENU
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector("#menu-icon");
    const nav = document.querySelector(".nav-links");

    menu.onclick = () => {
        nav.classList.toggle("active");
    };

});


// =========================================
// CLEAR CONTACT FORM AFTER SUBMISSION
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function() {

        setTimeout(() => {
            form.reset();
        }, 1000);

    });

});