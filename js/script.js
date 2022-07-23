const submit = document.querySelector('.review__btn');
const thankYou = document.querySelector('.thank-you');
const review = document.querySelector('.review');
submit.addEventListener("click", ()=> {
    thankYou.classList.toggle('active');
    review.classList.toggle('disable');
})
const textPlaceholder = document.querySelector('.thank-you__rate');