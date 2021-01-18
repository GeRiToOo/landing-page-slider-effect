const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideSLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideSLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {
  changeSlide('up');
});

downButton.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex > slideSLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideSLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
