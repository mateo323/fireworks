const humBtn = document.querySelector('.c-humMenu__btn');
const humMenu = document.querySelector('.c-humMenu__modal');

humBtn.addEventListener('click',()=>{
    humMenu.classList.toggle('open');
});