class Navbar {
    constructor(navbar) {
        this.navbar = navbar
        this.logo = this.navbar.querySelector(".nav-logo")
        this.anchorTag = this.navbar.querySelectorAll("a")
        this.loginButton = this.navbar.querySelector(".login-button")
        console.log(this.loginButton);
        this.loginButton.addEventListener("click", )
    }
}

const navbar = new Navbar(document.querySelector(".nav-header-container"))