
const vArea = document.querySelector('.inner-image');
const vItem = vArea.querySelectorAll(':nth-child(n)');
const vIndex = vItem.length;

for(let i = 1; i < vIndex; i++){
    vItem[i].classList.add('hidden');
}

setInterval(function(){
    let firstchild = vArea.querySelector(':nth-child(1)');
    let secondchild = vArea.querySelector(':nth-child(2)');
    firstchild.classList.add('hidden');
    secondchild.classList.remove('hidden');
    setTimeout(function(){
        vArea.insertAdjacentElement('beforeend',firstchild);   
    }, 2000);
}, 6000);

/*~~~~~~all fadein ~~~~~~~~~~~~~~~~~ */

// const allFact = document.querySelectorAll('div')

// allFact.forEach(e => {
//     e.style.transform = `scale(1)`
//     e.style.opacity = `1`;
// });

