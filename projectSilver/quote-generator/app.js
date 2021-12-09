var quoteArray = [];
var index = 0; 
var textPosition = 0; 
var flag = true;

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

  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray[index].length){
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' ';
    setTimeout("typewriter()", 6000);
    textPosition = 0;
    flag = true;
  }   
}

window.addEventListener('load', typewriter);
//text-to-speech
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("quote").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});
document.querySelector("#talk").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});
document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});
document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});}
