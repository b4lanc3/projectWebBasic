var name = document.getElementById('name');
var pw = document.getElementById('pw');

function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
}

function check() {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        window.location.href="../quote-generator/index.html" 
    }
}