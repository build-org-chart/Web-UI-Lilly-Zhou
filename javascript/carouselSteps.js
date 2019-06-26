class Steps {
  constructor(step) {
    // STEP LIST ELEMENTS
    this.step = step
    this.stepData = this.step.dataset.step
    console.log(this.stepData) // "1", "2", "3"

    //CAROUSEL ELEMENTS
    this.carousel = document.querySelector(".carousel")
    this.leftButton = this.carousel.querySelector(".left-button")
    this.rightButton = this.carousel.querySelector(".right-button")
    this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepData}"]`)
    console.log(this.carouselImages); // each image is now stored

    this.carouselImages = Array.from(this.carouselImages).map(image => new CarouselImages(image))

    this.step.addEventListener("click", ()=> this.selectStep())
  }

  selectStep() {
    const steps = document.querySelectorAll(".step")
    Array.from(steps).forEach(step => step.classList.remove("active-step"))
    this.step.classList.add("active-step")

    const carouselImages = document.querySelectorAll(".carousel img")
    
    Array.from(carouselImages).forEach(image => image.classList.remove("active-img"))
    this.carouselImages.forEach(image => image.selectImage())
  }
}

class CarouselImages {
  constructor(image) {
    this.carouselImage = image
    console.log("here");
  }

  selectImage() {
    const images = document.querySelectorAll(".carousel img")
    // images.
    this.carouselImage.classList.add("active-img")
  }
}

const steps = document.querySelectorAll(".step").forEach(step => new Steps(step))
console.log(steps);
