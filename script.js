const slides = document.querySelector('.slides')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let transformValue = 0


function nextSlide(){
    if(transformValue <= -220){
        transformValue = 0 
        slides.style.transform = `translateX(${transformValue}%)` 
    }else{
        transformValue -= 110
        slides.style.transform = `translateX(${transformValue}%)` 
    }
}


function prevSlide(){
    if(transformValue == 0){
        transformValue = -220 
        slides.style.transform = `translateX(${transformValue}%)` 
    }else{
        transformValue += 110
        slides.style.transform = `translateX(${transformValue}%)` 
    }
}

setInterval(nextSlide,10000)


next.addEventListener('click',nextSlide)
prev.addEventListener('click',prevSlide)