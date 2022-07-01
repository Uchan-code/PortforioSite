// 初期宣言
let usernameValue = "";
let emailValue = "";
let passwordValue = "";
let confirmPasswordValue = "";
let usernameErrorMessage = document.querySelector('#username-errormessage')
let emailErrorMessage = document.querySelector('#email-errormessage');
let passwordErrorMessage = document.querySelector('#password-errormessage')
let confirmPasswordErrorMessage = document.querySelector('#confirmpassword-errormessage')
let submitMessage = document.querySelector('#submit-message')

// エラーメッセージ格納
const errorMessageArray = 
    [
        "ErrorMessage",
        "入力されていません",
        "短すぎます",

        "メールアドレスに誤りがあります",

        "パスワードが不正です",

        "もういちど正しく入力してください"
    ]

// 取得する関数
const submitButton = document.querySelector('#submit');

function submit(){
    // submitされた時の関数
    let usernameValue = document.querySelector('#username').value;
    let emailValue = document.querySelector('#email').value;
    let passwordValue = document.querySelector('#password').value;
    let confirmPasswordValue = document.querySelector('#confirm-password').value;
    
    judgeUsername(usernameValue);
    judgeEmail(emailValue);
    judgePassword(passwordValue);
    judgeConfirmPassword(confirmPasswordValue,passwordValue);

    if(!usernameValue == "" 
       && usernameValue.match(/[^0x00-0x7f]/g).length > 2 
       && emailValue.match(/^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/) 
       && passwordValue.match(/^[a-z\d]{5,30}$/i) 
       && confirmPasswordValue == passwordValue){
        submitMessage.style.visibility = 'visible';
    }else{
        submitMessage.style.visibility = 'hidden';
    }
}


submitButton.addEventListener('click',submit)

// 判別する関数
function judgeUsername(usernameValue){
    if(!usernameValue == ""){
        let usernameValueLength = usernameValue.match(/[^0x00-0x7f]/g).length;
        nameChecker(usernameValueLength);
    }else{    
        let usernameValueLength = 0;
        nameChecker(usernameValueLength);
    }
}

function nameChecker(usernameValueLength){    
    if(usernameValueLength == 0){
        usernameErrorMessage.textContent = errorMessageArray[1]
        usernameErrorMessage.style.visibility = "visible";        
    }else if(usernameValueLength < 3){
        usernameErrorMessage.textContent = errorMessageArray[2]
        usernameErrorMessage.style.visibility = "visible";        
    }else{
        usernameErrorMessage.textContent = errorMessageArray[0]
        usernameErrorMessage.style.visibility = "hidden";
    }
}


function judgeEmail(emailValue){
    if(emailValue.match(/^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)){
        emailErrorMessage.textContent = errorMessageArray[0];
        emailErrorMessage.style.visibility = 'hidden'; 
    }else{
        emailErrorMessage.textContent = errorMessageArray[3];
        emailErrorMessage.style.visibility = 'visible';
    }
}

function judgePassword(passwordValue){
    if(passwordValue.match(/^[a-z\d]{5,30}$/i)){
        passwordErrorMessage.textContent = errorMessageArray[0];
        passwordErrorMessage.style.visibility = 'hidden';
    }else{
        passwordErrorMessage.textContent = errorMessageArray[4];
        passwordErrorMessage.style.visibility = 'visible';
    }
}

function judgeConfirmPassword(confirmPasswordValue,passwordValue){
    if(passwordValue.match(/^[a-z\d]{5,30}$/i) && confirmPasswordValue == passwordValue){
        confirmPasswordErrorMessage.textContent = errorMessageArray[0];
        confirmPasswordErrorMessage.style.visibility = 'hidden';
    }else{
        confirmPasswordErrorMessage.textContent = errorMessageArray[5];
        confirmPasswordErrorMessage.style.visibility = 'visible';
    }
}

function countUp(num){
    num += 1;
    return num;
}
