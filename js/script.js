let submit = document.querySelector('.review__btn');
submit.addEventListener("click", ()=> {
    let thankYou = document.querySelector('.thank-you');
    let review = document.querySelector('.review');
    thankYou.classList.toggle('active');
    review.classList.toggle('disable');
})