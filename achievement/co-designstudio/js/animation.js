const worksAnimation = document.querySelectorAll('.works-background')
const worksAnimationLength = worksAnimation.length

function animation(){
    worksAnimation.forEach(e => {
        let clientRect = e.getBoundingClientRect()
        let y = clientRect.top
        let py = window.pageYOffset + y

        if( py*0.8 < window.scrollY ){
            e.classList.add('fade-in')
            e.nextElementSibling.classList.add('fade-in')
        }
    });
}

// scroll量がworksAnimationのoffset位置より大きくなった場合
window.addEventListener('scroll',animation)

// header

const headwrp = document.querySelector('.header-wrapper')
const visualwrp = document.querySelector('.visual-wrapper')
const linkArea = document.querySelector('.link-area')

function onLoadAnimation(){
    headwrp.classList.remove('dis-active')
    visualwrp.classList.remove('dis-active')
    linkArea.classList.remove('dis-active')
}

window.addEventListener('load',onLoadAnimation)

// concept
const concept = document.querySelector('.concept')
const conceptYPosition = concept.getBoundingClientRect().top

function conceptAnimation(){
    if((conceptYPosition + window.pageXOffset)*0.5 < window.scrollY ){
        concept.classList.remove('dis-active')
    }
}

window.addEventListener('scroll',conceptAnimation)

// scrollbtn
const breakPointHeight = visualwrp.getBoundingClientRect().bottom
const pageTopBtn = document.querySelector('.pagetop-button')
const topMenu = document.querySelector('.top-menu')

function indicatedMenu(){
    if((breakPointHeight) < window.scrollY ){
        pageTopBtn.style.opacity = '1';
        topMenu.style.opacity = '1';
        topMenu.style.visibility = 'visible';
    }else{
        pageTopBtn.style.opacity = '0';
        topMenu.style.opacity = '0';
        topMenu.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll',indicatedMenu)