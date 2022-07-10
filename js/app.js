const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menubtnburger = document.querySelector(".menu-btn__burger");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.classList.add('mobile');
    
    nav.classList.remove('nav');
    
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('mobile')
    nav.classList.add('nav');
  }
});

menubtnburger.onanimationend(() => {
    console.log("animation ended");
})