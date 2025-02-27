'use strict';



// MOBILE NAVBAR TOGGLE

const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelector('[data-nav-toggler]')


navToggler.addEventListener('click', function(){
    navbar.classList.toggle('active');
})

// HEADER ACTIVE

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function(){
    header.classList[this.scrollY > 50 ? 'add' : 'remove']('active');
})
