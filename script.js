import {translateEnglishToMorse} from "./translate.js"

const output = document.querySelector(".toMorse__output");
const input = document.querySelector(".toMorse__text");
const button = document.querySelector(".toMorse__buttons");
const restart = document.querySelector(".toMorse__reset");

//inputting into translateEnglishToMorse 
//recieing an output
console.log("input.value")
button.addEventListener("click", () => {
    const inputText = input.value;
    if (inputText.length>0) {
    const morseTranslation = translateEnglishToMorse(inputText);
    output.innerHTML=`${morseTranslation}`;
    }
  })

restart.addEventListener("click", ()=>{
   input.value = "";
   output.innerHTML= "";
   output.innerHTML= `Morse-code will be displayed here`
})