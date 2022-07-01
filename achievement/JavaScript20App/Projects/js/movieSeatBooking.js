// movieSeatBooking
const movieHallSeats = document.querySelectorAll('.screen-hall .seat')
const selectedCount = document.querySelector('#selected-count')
const selectedCountTotal = document.querySelector('#selected-cash')
const selectedMovie = document.getElementById('selected-movie')

// selectedイベント
selectedMovie.onchange = () => {
    let selectedOption = document.querySelectorAll('option');
    let selectedSeats = document.querySelectorAll('.screen-hall-seats .selected')
    let selectedSeatsLength = selectedSeats.length;
    if(selectedOption[0].selected){
        let selectedMovieCash = 5;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }else if(selectedOption[1].selected){
        let selectedMovieCash = 7;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }else if(selectedOption[2].selected){
        let selectedMovieCash = 10;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }
}

// クリックイベント付与
movieHallSeats.forEach(seat => {
    seat.addEventListener('click',seatsClickEvent)    
});

// イベント欄
// クリックイベントのまとめ
function seatsClickEvent(event){
    let selectedClassJudge = event.srcElement.classList.value.indexOf('selected') == -1
    let occupiedClassJudge = event.srcElement.classList.value.indexOf('occupied') == -1
    
    if(occupiedClassJudge){
        clickedSeat(event,selectedClassJudge);
        selectedSeatCount();
    }else{
        return;
    }
}

// selectedが付与されているNodeを数える
function selectedSeatCount(){
    let selectedOption = document.querySelectorAll('option');
    let selectedSeats = document.querySelectorAll('.screen-hall-seats .selected')
    let selectedSeatsLength = selectedSeats.length;
    // 選択席数の表示
    selectedCount.textContent = selectedSeatsLength;
    if(selectedOption[0].selected){
        let selectedMovieCash = 5;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }else if(selectedOption[1].selected){
        let selectedMovieCash = 7;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }else if(selectedOption[2].selected){
        let selectedMovieCash = 10;
        selectedCountTotal.textContent = selectedSeatsLength * selectedMovieCash;
    }
}

// selectedの取付取外を行う
function clickedSeat(event,selectedClassJudge){
    if(selectedClassJudge){
        event.target.classList.add('selected')
    }else{
        event.target.classList.remove('selected')
    }
}
