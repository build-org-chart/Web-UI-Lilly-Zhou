// class Steps {
//   constructor(step) {
//     // STEP LIST ELEMENTS
//     this.step = step
//     this.stepData = this.step.dataset.step
//     console.log(this.stepData) // "1", "2", "3"

//     //CAROUSEL ELEMENTS
//     this.carousel = document.querySelector(".carousel")
//     this.leftButton = this.carousel.querySelector(".left-button")
//     this.rightButton = this.carousel.querySelector(".right-button")
//     this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepData}"]`)
//     console.log(this.carouselImages); // each image is now stored

//     this.carouselImages = Array.from(this.carouselImages).map(image => new CarouselImages(image))
//     // 
//     this.step.addEventListener("click", ()=> this.selectStep())
//   }

//   selectStep() {
//     const steps = document.querySelectorAll(".step") // not great habit to select again from document (could interfere with other logic)
//     Array.from(steps).forEach(step => step.classList.remove("active-step")) 
//     this.step.classList.add("active-step")

//     const carouselImages = document.querySelectorAll(".carousel img")
    
//     Array.from(carouselImages).forEach(image => image.classList.remove("active-img"))
//     this.carouselImages.forEach(image => image.selectImage())
//   }
// }

// class CarouselImages {
//   constructor(image) {
//     this.carouselImage = image
//   }

//   selectImage() {
//     const images = document.querySelectorAll(".carousel img")
//     this.carouselImage.classList.add("active-img")
//   }
// }

// const steps = document.querySelectorAll(".step").forEach(step => new Steps(step))
// console.log(steps);


//// REDO 

class Carousel {
  constructor(carousel) {
    this.carousel = carousel
    this.carouselSteps = Array.from(this.carousel.querySelectorAll(".step")).map((step, index) => new CarouselSteps(step, this, index))
    this.selected = 0
    console.log(this.carousel)
    
    // this.carouselImages = this.carousel.querySelector(".carousel")
    this.leftButton = this.carousel.querySelector(".left-button")
    this.rightButton = this.carousel.querySelector(".right-button")
    this.leftButton.addEventListener("click", () => this.selectPrevious())
    this.rightButton.addEventListener("click", () => this.selectNext())
    // this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepData}"]`)
    // this.carouselImages = Array.from(this.carouselImages).map(image => new CarouselImages(image))
  }
  selectStep(step) {
    this.carouselSteps[this.selected].deselectStep() // deselected current step
    step.selectStep() //selected this step. not with index 0, however
    this.selected = step.index // points to newly selected step
    // console.log(step);

  }
  selectNext() {
    this.selectStep(this.carouselSteps[(this.selected + 1) % this.carouselSteps.length])  
  }
  selectPrevious() {
    this.selectStep(this.carouselSteps[(this.selected - 1 + this.carouselSteps.length) % this.carouselSteps.length]) // once you hit negative, add 
  }
}

class CarouselSteps {
  constructor(carouselStep, carousel, index) { 
    // STEP LIST ELEMENTS
    this.step = carouselStep
    this.index = index
    this.stepData = this.step.dataset.step
    console.log(this.stepData) // "1", "2", "3"
    this.carouselImage = carousel.carousel.querySelector(`img[data-step="${this.stepData}"]`) // not searching doc, but searching parent element forimage with same step data
    this.step.addEventListener("click", ()=> carousel.selectStep(this))
  }

  selectStep() {
    // const steps = document.querySelectorAll(".step") // not great habit to select again from document (could interfere with other logic)
    // Array.from(steps).forEach(step => step.classList.remove("active-step")) 
    // this.step.classList.add("active-step")
    // const carouselImages = document.querySelectorAll(".carousel img")
    // Array.from(carouselImages).forEach(image => image.classList.remove("active-img"))
    // this.carouselImages.forEach(image => image.selectImage())

    this.step.classList.add("active-step")
    this.carouselImage.classList.add("active-img")

  }

  deselectStep() {
    this.step.classList.remove("active-step")
    this.carouselImage.classList.remove("active-img")
  }
}

class CarouselImages {
  constructor(image) {
    this.carouselImage = image
  }

  selectImage() {
    const images = document.querySelectorAll(".carousel img")
    this.carouselImage.classList.add("active-img")
  }
}

// const carouselSteps = new CarouselSteps(document.querySelector(".steps"))
// const steps = document.querySelectorAll(".step").forEach(step => new Steps(step))
const carousel = new Carousel(document.querySelector(".steps"))