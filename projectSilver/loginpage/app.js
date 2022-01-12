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
const signInForm=document.getElementById("signIn-form") ;
signInForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(signInForm.username.value)
})