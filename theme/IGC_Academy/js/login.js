// const 선언
const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginInput = document.getElementsByClassName('login_wrap')[0];
const loginBtn = document.getElementById('btn_login');
const linkToMain = document.getElementsByTagName('a')[0];

// 아이디 validation '@' 포함
function idCheck() {
    var hasAt = idInput.value.indexOf('@');
    return hasAt !== -1 ? true : false;
}

// 비밀번호 validation 5글자 이상
function pwCheck() {
    return pwInput.value.length >= 5 ? true : false;
}

// 로그인 버튼 keyup 이벤트
loginInput.addEventListener('keyup', function(event) {
    const completedInput = (idCheck() && pwCheck());
    loginBtn.disabled = completedInput ? false : true;
    linkToMain.href = completedInput ? "/" : "#none"; 
})

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        loginBtn.click();
    }
})