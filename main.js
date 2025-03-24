// toggles Button
const navmenu = document.getElementById("nav-menu");
const navlink =document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click" , () => {
    navmenu.classList.toggle("left[0]");
})