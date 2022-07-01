// 読み込みの確認

// モーダルウィンドウの取得
const mwOverlay = document.querySelector('.mw-overlay');
const mwContainer = document.querySelector('.mw-container');
// ブラウザサイズの取得
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
// imgの取得
const mwImage = document.getElementById('mw-image')
// date-mwの取得※今回は使わない
// const dataMw = document.querySelectorAll('[data-mw]')
// button.view-imageを使う
const viewImgButton = document.querySelectorAll('.view-image')

function clickEvent(){
    mwOverlay.style.width = `${windowInnerWidth}px`;    // モーダルウィンドウへブラウザサイズを適用
    mwOverlay.style.height = `${windowInnerHeight}px`;
    mwOverlay.style.opacity = '0.8';    // opacityの変更

    
    mwContainer.style.width = `${windowInnerWidth}px`;
    mwContainer.style.height = `${windowInnerHeight}px`;

    setTimeout(function(){
        mwImage.style.opacity = '1';
        mwImage.style.transition = '0.8s';
    },1000)
    setTimeout(function(){
        mwImage.style.transition = '0s';
    },2500)
}

function getImage(){
    let target = event.target.parentNode.parentNode.parentNode.querySelector('[data-mw]')
    // img要素からimg-urlを取得する
    let imageSorce = target.src;
    // 取得したimg-urlをmw-container→imgにネストする
    mwImage.src = imageSorce
    // // console.log()
    if(windowInnerWidth < target.naturalWidth){
        mwImage.width = windowInnerWidth*0.8;
    }
};

// 再度クリックによってモーダルウィンドウを閉じる

function clickCloseEvent(){
    mwOverlay.style.width = `0px`;    // モーダルウィンドウへブラウザサイズを適用
    mwOverlay.style.height = `0px`;
    mwOverlay.style.opacity = '0';
    
    mwImage.src = '';
    mwImage.style.opacity = '0';

    mwContainer.style.width = `0px`;
    mwContainer.style.height = `0px`;
}

// addEventListener
mwOverlay.addEventListener('click',clickCloseEvent)
// dataMw.forEach(element => {
//     element.addEventListener('click', clickEvent)
//     element.addEventListener('click', getImage)
// });

viewImgButton.forEach(element =>{
    element.addEventListener('click',clickEvent)
    element.addEventListener('click',getImage)
})