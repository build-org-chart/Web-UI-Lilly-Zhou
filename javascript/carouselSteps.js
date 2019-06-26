class Steps {
  constructor(step) {
    // STEP LIST ELEMENTS
    this.step = step
    console.log(this.step)
    this.stepData = this.step.dataset.step
    console.log(this.stepData) // "1", "2", "3"

    //CAROUSEL ELEMENTS
    this.carousel = document.querySelector(".carousel")
    this.leftButton = this.carousel.querySelector(".left-button")
    this.rightButton = this.carousel.querySelector(".right-button")
    this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepData}"]`)
    console.log(this.carouselImages); // each image is now stored

    this.carouselImages = Array.from(this.carouselImages).map (image => new CarouselImages(image))

    this.step.addEventListener("click", ()=> this.selectStep())
    // this.stepDataArr = Array.from(this.step).map(step => step.dataset.step);
    // console.log(this.stepDataArr); // Array ["1","2","3"]
    
    // for (let i = 0; i < this.stepDataArr.length; i++) {
    //   this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepDataArr[i]}"]`)
    //   console.log(this.carouselImages)
      // this.carouselImagesArr = Array.from(this.carouselImages).map(image => new CarouselImage(image)) 
  }
  selectStep() {
    const steps = document.querySelectorAll(".step")
    Array.from(steps).forEach(step => step.classList.remove("active-step"))
    this.step.classList.add("active-step")

    const carouselImages = document.querySelectorAll(".carousel img")
    // console.log("HERE", carouselImages);
    Array.from(carouselImages).forEach(image => image.classList.display = "block")
  }
}

class CarouselImages {
  constructor(image) {
    this.carouselImage = image
  }

  selectImage() {
    this.carouselImage.style.display = "block";
  }
}

const steps = document.querySelectorAll(".step").forEach(step => new Steps(step))
console.log(steps);
