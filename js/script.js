let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav__list');

hamburger.addEventListener('click', function (e) {
   console.log('hi');
   e.stopPropagation();
   nav.classList.toggle('active');
});

document.addEventListener('click', function (e) {
   if (!nav.contains(e.target)) {
      nav.classList.remove('active');
   }
});