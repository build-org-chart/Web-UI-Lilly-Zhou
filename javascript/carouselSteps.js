class Steps {
    constructor(steps) {
        this.steps = steps
        // console.log(this.steps)

        this.step = this.steps.querySelectorAll(".step")
        this.stepData = Array.from(this.step).map(step => step.dataset.step)
        console.log(this.stepData)

        // CAROUSEL
        this.carousel = this.steps.querySelector(".carousel")
        this.leftButton = this.carousel.querySelector(".left-button")
        this.rightButton = this.carousel.querySelector(".right-button")
        this.carouselImages = this.carousel.querySelectorAll(".carousel img")
    }
}

const steps = new Steps(document.querySelector(".steps"))