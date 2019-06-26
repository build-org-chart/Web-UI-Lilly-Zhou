class Steps {
  constructor(steps) {
    // STEP LIST ELEMENTS
    this.steps = steps;
    // console.log(this.steps)
    this.step = this.steps.querySelectorAll(".step");
    this.stepDataArr = Array.from(this.step).map(step => step.dataset.step);
    console.log(this.stepDataArr); // Array ["1","2","3"]

    this.carousel = this.steps.querySelector(".carousel");
    // this.leftButton = this.carousel.querySelector(".left-button")
    // this.rightButton = this.carousel.querySelector(".right-button")
    
    // how to convert this to a forEach?
    // Loop through each 
    for (let i = 0; i < this.stepDataArr.length; i++) {
      this.carouselImages = this.carousel.querySelectorAll(`img[data-step="${this.stepDataArr[i]}"]`)
      console.log(this.carouselImages)
      // this.carouselImagesArr = Array.from(this.carouselImages).map(image => new CarouselImage(image)) 
    }

    // console.log(this.carouselImagesA)

  }
  
}

const steps = new Steps(document.querySelector(".steps"));
