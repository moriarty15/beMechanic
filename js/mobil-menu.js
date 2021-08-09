const closeMenu = document.querySelector('.button__burger');
console.log(closeMenu);
closeMenu.addEventListener('click', giveClassSiteNav)
const siteNavEl = document.querySelector('.site-nav');
console.log(siteNavEl)
console.log("hi i`m Morty");
function giveClassSiteNav() {
   return siteNavEl.classList.toggle('is-open');
}