// Menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Carrousel
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        respondTo:'window',
        responsive:'none',
        adaptiveHeight: true
    });
});
