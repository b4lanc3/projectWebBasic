$(".log-in").click(function(){
    $(".signIn").addClass("active-dx");
    $(".signUp").addClass("inactive-sx");
    $(".signUp").removeClass("active-sx");
    $(".signIn").removeClass("inactive-dx");
  });
  
  $(".back").click(function(){
    $(".signUp").addClass("active-sx");
    $(".signIn").addClass("inactive-dx");
    $(".signIn").removeClass("active-dx");
    $(".signUp").removeClass("inactive-sx");
  });
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
        alert('You are loged in.');
    }
}