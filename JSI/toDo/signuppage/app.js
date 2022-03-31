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
  const signUpForm=document.getElementById("signUp-form") ;
console.log(signUpForm);
signUpForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(signUpForm.username.value)
})
