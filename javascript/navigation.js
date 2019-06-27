let button = document.querySelector("button");
console.log(button);

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
