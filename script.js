

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slider = document.getElementById('slider')
const slides = document.getElementById('slides')

prevBtn.addEventListener('click', prevBTN)
nextBtn.addEventListener('click', nextBTN )

let sliderIndex = 0;
const slideWidth = slider.clientWidth;

function prevBTN() {
 sliderIndex--;
 if(sliderIndex < 0){
    sliderIndex = 5
    
 }
 slides.style.transform = `translatex( -${slideWidth * sliderIndex}px)`
 slides.style.transition = 'ease-in-out 2s'
  
};


function nextBTN() {
    sliderIndex++;
    if (sliderIndex > 5) {
        sliderIndex = 0
    }
    slides.style.transform = `translatex( -${slideWidth * sliderIndex}px)`
    slides.style.transition = 'ease-in-out 2s'
};