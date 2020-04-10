const cartButton = document.querySelector('#shopping-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');


cartButton.addEventListener("click", function(event){
    modal.classList.add('is-open');
})

close.addEventListener("click", function(event){
    modal.classList.remove('is-open');
})

new WOW().init();