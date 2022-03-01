var quoteArray = [];
var index = 0; 
var textPosition = 0; 
var flag = true;
let start=document.getElementById('start')
loadQuote = () => {
  const url = 'https://api.quotable.io/random';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      quoteArray[index] = data.content;
   })

   .catch(error => console.log(error));
}

typewriter = () => {
  if(flag){
    loadQuote();
    quoteArray[index] += ""; 
    flag = false;
  }
 let quote =
  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';
console.log(quote)
  if(textPosition++ != quoteArray[index].length){
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' ';
    setTimeout("typewriter()", 15000);
    textPosition = 0;
    flag = true;
    start.style.display = "inline-block"
    pauseBtn.style.display = "inline-block"
    resumeBtn.style.display = "inline-block"
    cancelBtn.style.display = "inline-block"
  }   
}

window.addEventListener('load', typewriter);
//text-to-speech
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("#quote").value;
let a=document.querySelector("#quote").innerHTML;
  console.log(a)
  speechSynthesis.speak(new SpeechSynthesisUtterance(a));
  console.log(speech)
});
document.querySelector("#talk").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
document.querySelector("#pause").addEventListener("click", () => {
  speechSynthesis.pause((a))
});
document.querySelector("#resume").addEventListener("click", () => {
  speechSynthesis.resume(new SpeechSynthesisUtterance(a))
});
document.querySelector("#cancel").addEventListener("click", () => {
  speechSynthesis.cancel(new SpeechSynthesisUtterance(a))
});}
function continue1 (){
  speechSynthesis.resume();
}
function pause()
{
    speechSynthesis.pause();
}


function stop()
{
    speechSynthesis.cancel();
}
pauseBtn.addEventListener('click', pause);
cancelBtn.addEventListener('click', stop);
resumeBtn.addEventListener('click', continue1)