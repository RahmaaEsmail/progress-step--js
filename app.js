const progressSteps = document.querySelector('.progress');
const steps = document.querySelectorAll('p')
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let counter = 2;

const nextStep = function () {
    let stepEle = progressSteps.querySelector(`#progress-${counter}`)
    stepEle.classList.add('active')
    prevBtn.classList.remove('disable-btn')

    counter++;
    if (counter > steps.length)
        nextBtn.classList.add('disable-btn')
}


const prevStep = function () {
    if (counter >= 1) {
        let stepEle = progressSteps.querySelector(`#progress-${counter - 1}`)
        stepEle.classList.remove('active')
        nextBtn.classList.remove('disable-btn')
        counter--;
    }

    if (counter <= 2)
        prevBtn.classList.add('disable-btn')
}

nextBtn.addEventListener('click', nextStep)
prevBtn.addEventListener('click', prevStep)