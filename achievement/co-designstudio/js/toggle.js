const toggleOpen = document.querySelector('.navigation-button')
const toggleClose = document.querySelector('.nav-close')
const NaviMenu = document.querySelector('.nav-menu')

function toggleNav(){
    NaviMenu.classList.toggle('open');
}

toggleOpen.addEventListener('click', toggleNav)
toggleClose.addEventListener('click', toggleNav)