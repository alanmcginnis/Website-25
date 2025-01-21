/*
Hide header on scroll down & show on scroll up
*/

const headerEl = document.getElementById('header');
let lastPos = document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  const currPos = document.documentElement.scrollTop;

  if (currPos > lastPos) {
    if (currPos > headerEl.offsetHeight) {
      headerEl.classList.add('-translate-y-full');
      headerEl.classList.remove('shadow-md');
    }
  } else {
    headerEl.classList.remove('-translate-y-full');
    headerEl.classList.add('shadow-md');
  }

  lastPos = currPos;
}, false);

/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/

const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
}, false);

/*
Lazy load images
*/

// const lazyImages = document.getElementsByClassName('lazy');

// document.addEventListener('DOMContentLoaded', () => {
//   [...lazyImages].forEach((elem) => {
//     const originalImage = elem.dataset.src;

//     elem.setAttribute('src', originalImage);
//     elem.removeAttribute('data-src');
//   });

// }, false);