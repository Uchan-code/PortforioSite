const url = './js/example.json'
const rateSelectElement = document.getElementById('currency-one')
const currencySelectElement = document.getElementById('currency-two')
const rateText = document.querySelector('.rate')
const currencyTwoValueText = document.querySelector('.currency-two-value')

const swapButton = document.getElementById('swap-button')

// fetch("https://open.exchangerate-api.com/v6/latest")

fetch(url) //fetch APIデータの取得
.then(response => //応答データをjsonとして取り扱う
    response.json()
)
.then(data => {
    Object.keys(data.rates).forEach(element => {
        ratesCreateSelector(element)
        currencysCreateSelector(element)
    })

    const currencyOneElement = document.querySelector('#currency-one')
    const currencyTwoElement = document.querySelector('#currency-two')
    currencyOneElement.addEventListener('change',changedCurrency)
    currencyTwoElement.addEventListener('change',changedCurrency)

    swapButton.addEventListener('click',
        function(){
            let currencyOneName = document.getElementById('currency-one').value
            let currencyTwoName = document.getElementById('currency-two').value
            const currencyOneOptionList = document.querySelectorAll('#currency-one option')
            const currencyTwoOptionList = document.querySelectorAll('#currency-two option')

            currencyOneOptionList.forEach(element => {
                if(element.value == currencyTwoName){
                    element.selected = true;
                }else{
                    return ;
                }
            });

            currencyTwoOptionList.forEach(element => {
                if(element.value == currencyOneName){
                    element.selected = true;
                }else{
                    return ;
                }
            });

            changedCurrency();
        }
    )

    function changedCurrency(){
        let currencyOneName = document.querySelector('#currency-one').value
        let currencyOne = Object(data.rates)[currencyOneName]//Objectはthen()内でしか使えない
        let currencyTwoName = document.querySelector('#currency-two').value
        let currencyTwo = Object(data.rates)[currencyTwoName]//then()外で宣言した関数をコールバックしてもエラーになる??

        let calcRateResult = Math.round(Math.round((currencyTwo/currencyOne)*100))/100

        rateText.textContent = `1 ${currencyOneName} = ${calcRateResult} ${currencyTwoName}`
        currencyTwoValueText.textContent = `${calcRateResult}`
    }
});

function ratesCreateSelector(element){
    let newElementOption = document.createElement('option') // document.createElement('tagname')はタグネームの要素を生成する
    let newElementTextContent = document.createTextNode(`${element}`) // 2. const newElementContent = document.createTextNode(`textnode`)
    newElementOption.value = `${element}`
    newElementOption.appendChild(newElementTextContent) // 3. newElementOption.appendChild(newElementContent)

    rateSelectElement.appendChild(newElementOption)
}


function currencysCreateSelector(element){
    let newElementOption = document.createElement('option') // document.createElement('tagname')はタグネームの要素を生成する
    let newElementTextContent = document.createTextNode(`${element}`) // 2. const newElementContent = document.createTextNode(`textnode`)
    newElementOption.value = `${element}`
    newElementOption.appendChild(newElementTextContent) // 3. newElementOption.appendChild(newElementContent)

    currencySelectElement.appendChild(newElementOption)
}

