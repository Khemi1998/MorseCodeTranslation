import {translateEnglishToMorse} from "./translate.js"

const output = document.querySelector(".toMorse__output");
const input = document.querySelector(".toMorse__text");
const button = document.querySelector(".toMorse__buttons");

console.log("input.value")
button.addEventListener("click", () => {
    const inputText = input.value;
    const morseTranslation = translateEnglishToMorse(inputText);
    output.innerHTML=`${morseTranslation}`;
  })