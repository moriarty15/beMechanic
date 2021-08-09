const closeMenu = document.querySelector('.button__burger');
console.log(closeMenu);
closeMenu.addEventListener('click', giveClassSiteNav)
const siteNavEl = document.querySelector('.site-nav');
console.log(siteNavEl)

function giveClassSiteNav() {
   return siteNavEl.classList.toggle('is-open');
}

const w1 = document.querySelector('.site-nav__list');
console.log(w1);
const w2 = document.querySelectorAll('.site-nav__item');
console.log(w2);
w1.addEventListener('click', giveClassSiteNav)

console.log("hi i`m Morty");