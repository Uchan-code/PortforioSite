// video要素の読み込み
const videoElement = document.getElementById('example')
let videoCurrentTime = videoElement.currentTime;

// videoHandlerの読み込み
const videoHandler = document.querySelector('.video-handler__icon')
let videoCurrentTimeText = document.querySelector('.video-currenttime')
const videoTotalTimeText = document.querySelector('.video-totaltime')
const videoSeekBar = document.querySelector('.video-seekbar')


// clickイベント付与
videoElement.addEventListener('click',handlePlayButton)
videoHandler.addEventListener('click',handlePlayButton)

// timeUpdate
videoElement.addEventListener('timeupdate',videoTimeUpdate)
window.addEventListener('load',videoTimeLoad)

// seekonchangeイベント
videoSeekBar.addEventListener('change',seekbarMove)

// 動画の現在時間を読み込んでseekに返してる
function videoTimeUpdate(){
    let videoCurrentTime = videoElement.currentTime;
    videoSeekBar.value = (videoSeekBar.max/videoElement.duration)*videoCurrentTime;
    if(videoCurrentTime > 59){
        // 分と秒で分ける
    }else{
        if(videoCurrentTime > 9){
            videoCurrentTimeText.textContent = `0:${Math.ceil(videoCurrentTime)}`;
        }else{
            videoCurrentTimeText.textContent = `0:0${Math.ceil(videoCurrentTime)}`;
        }
    }
}

// seekの情報を読み込んでvideoCurrentTimeに返してる
function seekbarMove(){
    // ×な記述（変数に再代入されるだけでプロパティ値は変わらない）
    videoCurrentTime = (videoSeekBar.value/videoSeekBar.max)*videoElement.duration;
    // 〇な記述（プロパティ値を直接変更している）
    videoElement.currentTime = (videoSeekBar.value/videoSeekBar.max)*videoElement.duration;
    return ;
}

// 動画の情報を読み込んでる
function videoTimeLoad(){
    let videoTotalTime = videoElement.duration;
    videoCurrentTimeText.textContent = "0:00";
    if(videoTotalTime > 59){
        // 分と秒で分ける
    }else{
        videoTotalTimeText.textContent = `0:${Math.ceil(videoTotalTime)}`
    }
}

// 再生/停止をコントロール
function handlePlayButton(){
    if(videoElement.paused){
        videoElement.play();
        videoHandler.classList.toggle('playing')
    }else{
        videoElement.pause();
        videoHandler.classList.toggle('playing')
    }
}

// onchange

console.log(videoElement.currentTime) /*確認用*/