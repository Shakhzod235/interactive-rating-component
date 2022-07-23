const submit = document.querySelector('.review__btn');
const thankYou = document.querySelector('.gratitude');
const review = document.querySelector('.review');
submit.addEventListener("click", ()=> {
    thankYou.classList.toggle('active');
    review.classList.toggle('disable');
})
const textPlaceholder = document.querySelector('.gratitude__rate');