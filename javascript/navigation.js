// HAMBURGER MENU ON TABLET/MOBILE
// let menuOpen = () => {
//     console.log("open!");
//     menuLinks.classList.remove("menu-links-close")
//     menuLinks.classList.add("menu-links-open")
// }

// let menuClose = () => {
//     console.log("closed!");
//     menuLinks.classList.remove("menu-links-open")
//     menuLinks.classList.add("menu-links-close")
// }

let menuToggle = () => {
    menuLinks.classList.toggle("menu-links-close")
    const container = document.querySelector(".container")
    container.classList.toggle("container-menu-adjusted")
}

const hamburgerButton = document.querySelector(".menu-button")
const menuLinks = document.querySelector(".menu .nav-links")
hamburgerButton.addEventListener("click", menuToggle)
// hamburgerButton.addEventListener("mouseover", menuOpen)
// hamburgerButton.addEventListener("mouseout", menuClose)