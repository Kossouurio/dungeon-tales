// Menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

