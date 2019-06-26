class Steps {
  constructor(steps) {
    // STEP LIST ELEMENTS
    this.steps = steps;
    // console.log(this.steps)
    this.step = this.steps.querySelectorAll(".step");
    this.stepData = Array.from(this.step).map(step => step.dataset.step);
    console.log(this.stepData); // Array ["1","2","3"]

    this.carousel = this.steps.querySelector(".carousel");
    for (let i = 0; i < this.stepData.length; i++) {
      this.carouselImages = document.querySelectorAll(`img[data-step="${this.stepData[i]}"]`)
      console.log(this.carouselImages);
    }
    console.log(this.lastIndex);

    // CAROUSEL ELEMENTS

    // this.leftButton = this.carousel.querySelector(".left-button")
    // this.rightButton = this.carousel.querySelector(".right-button")
    // this.carouselImages = this.carousel.querySelectorAll(".carousel img")
  }

  selectImage() {}
}

const steps = new Steps(document.querySelector(".steps"));
