function store() {

    var name = document.getElementById('name1');
    var pw = document.getElementById('pw1');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw1', pw1.value);
    alert('Your account has been created');
    window.location.href = "../loginpage/index.html"
}

function check() {
    var storedName = localStorage.getItem('name1');
    var storedPw = localStorage.getItem('pw1');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        window.location.href = "../Main/index.html"
    } else {
        alert('Error on login');
    }
    console.log(storedName)
}