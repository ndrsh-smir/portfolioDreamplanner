// Burger

const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger-btn');
const burgerIcon = document.querySelector('.burger-btn__icon');

burgerBtn.addEventListener('click', () =>{
    header.classList.toggle('header-mobile');
    document.body.classList.toggle('no-scroll');
})

// Modal

const modal = document.querySelector('.modal-wrapper');
const btnsModalOpen = document.querySelectorAll('.btn[type="button"]');

btnsModalOpen.forEach((btn) => {
    btn.addEventListener('click', () =>{
        modal.classList.remove('none');
        document.body.classList.add('no-scroll');
    });
});

const btnModalExit = document.querySelector('.modal__exit');

btnModalExit.addEventListener('click', () =>{
    modal.classList.add('none');
    document.body.classList.remove('no-scroll');
});

const modalForm = document.querySelector('.modal__form');
const modalDone = document.querySelector('.modal__done');
const modalBtn = document.querySelector('.modal__btn');

modalBtn.addEventListener('click', () => {
    modalForm.classList.add('none');
    modalBtn.classList.add('none');
    modalDone.classList.remove('none');
});