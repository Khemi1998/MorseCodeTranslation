import { moduleExpression } from "@babel/types";

//letters to morse
export const translateEnglishToMorse = (letter) => {

//example
let english = "hi";

//letters into array
let englishArr = english.split("")

//conversion into morse
const morse = englishArr.map((letter)=>{
    switch(letter) {
        case "a":
            return (".-");
            break;
        case "b":
            return ("-...");
            break;
        case "c":
            return ("-.-.");
            break;
        case "d":
            return ("-..");
            break;
        case "e":
            return (".");
            break;
        case "f":
            return ("..-.");
            break;
        case "g":
            return ("--.");
            break;
        case "h":
            return ("....");
            break;
        case "i":
            return ("..");
            break;
        case "h":
            return ("....");
            break;
        case "i":
           return ("..");
            break;
        case "j":
            return (".---");
            break;
        case "k":
            return ("-.-");
            break;
        case "l":
           return (".-..");
           break;
        case "m":
           return ("--");
           break;
        case "n":
           return ("-.");
           break;
        case "o":
           return ("---");
           break;
        case "p":
           return (".--.");
           break;
        case "q":
           return ("--.-");
           break;
        case "r":
           return (".-.");
           break;
        case "s":
           return ("...");
           break;
        case "t":
           return ("-");
           break;
        case "u":
           return ("..-");
           break;
        case "v":
           return ("...-");
           break;
        case "w":
           return (".--");
           break;
        case "x":
           return ("-..-");
           break;
        case "y":
          return ("-.--");
          break;
        case "z":
          return ("--..");
          break;
        default :
        return("invalid");
    }

})
//join array to form a string
return morse.join("");
};


