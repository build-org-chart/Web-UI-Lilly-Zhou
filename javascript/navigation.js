// BUTTON EFFECT

let button = document.querySelector("button");

let glow = () => {
  console.log("glow!");
  button.classList.add("btn-hover");
  button.classList.remove("btn-leave");
  console.log(button.classList);
};

let unglow = () => {
  console.log("unglow!");
  button.classList.add("btn-leave");
  button.classList.remove("btn-hover");
  console.log(button.classList);
};

button.addEventListener("mouseover", glow);
button.addEventListener("mouseout", unglow);

// HAMBURGER MENU ON TABLET/MOBILE
let menuOpen = () => {
    console.log("open!");
    menuLinks.classList.remove("menu-links-close")
    menuLinks.classList.add("menu-links-open")
}

let menuClose = () => {
    console.log("closed!");
    menuLinks.classList.remove("menu-links-open")
    menuLinks.classList.add("menu-links-close")
}

let menuToggle = () => {
    menuLinks.classList.toggle("menu-links-close")
}

const hamburgerButton = document.querySelector(".menu-button")
const menuLinks = document.querySelector(".menu .nav-links")
hamburgerButton.addEventListener("click", menuToggle)
// hamburgerButton.addEventListener("mouseover", menuOpen)
// hamburgerButton.addEventListener("mouseout", menuClose)