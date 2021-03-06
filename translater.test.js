import {expect, it, describe} from "@jest/globals";
import {translateEnglishToMorse} from "./translate.js"

describe ("Translate single letters to morse", () => {
//5 valid tests (letters to morse)
it("should translate a to .-", ()=>{
    const result = translateEnglishToMorse("a");
    expect(result).toBe(".-");
})

it("should translate b to -...", ()=>{
    const result = translateEnglishToMorse("b");
    expect(result).toBe("-...");
})

it("should translate c to -.-.", ()=>{
    const result = translateEnglishToMorse("c");
    expect(result).toBe("-.-.");
})

it("should translate d to -..", ()=>{
    const result = translateEnglishToMorse("d");
    expect(result).toBe("-..");
})

it("should translate e to .", ()=>{
    const result = translateEnglishToMorse("e");
    expect(result).toBe(".");
})

//3 invalid tests
it("should translate ! to invalid", ()=>{
    const result = translateEnglishToMorse("!");
    expect(result).toBe("invalid");
})

it("should translate $ to invalid", ()=>{
    const result = translateEnglishToMorse("$");
    expect(result).toBe("invalid");
})

it("should translate % to invalid", ()=>{
    const result = translateEnglishToMorse("%");
    expect(result).toBe("invalid");
})
})

describe ("Translate single letters to morse", () => {
//3 tests (words to morse)
it("should translate hi to .... ..", ()=>{
    const result = translateEnglishToMorse("hi");
    expect(result).toBe(".... ..");
})

it("should translate hello to .... . .-.. .-.. ---", ()=>{
    const result = translateEnglishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
})

it("should translate bye to -... -.-- .", ()=>{
    const result = translateEnglishToMorse("bye");
    expect(result).toBe("-... -.-- .");
})
})

describe ("Translate words to morse", () => {
    //2 tests (words to morse)
    it("should translate hi bye to .... ..  /  -... -.-- .", ()=>{
        const result = translateEnglishToMorse("hi bye");
        expect(result).toBe(".... ..  /  -... -.-- .");
    })
    
    it("should translate hello world to .... . .-.. .-.. ---  /  .-- --- .-. .-.. -..", ()=>{
        const result = translateEnglishToMorse("hello world");
        expect(result).toBe(".... . .-.. .-.. ---  /  .-- --- .-. .-.. -..");
    })
    
})
/*
//5 valid tests (morse to letters)
it("should translate ..-. to f", ()=>{
    const result = translate("..-.");
    expect(result).toBe("f");
})

it("should translate --. to g", ()=>{
    const result = translate("--.");
    expect(result).toBe("g");
})

it("should translate .... to h", ()=>{
    const result = translate("....");
    expect(result).toBe("h");
})

it("should translate .. to i", ()=>{
    const result = translate("..");
    expect(result).toBe("i");
})

it("should translate e to .", ()=>{
    const result = translate("e");
    expect(result).toBe(".");
})*/

//3 invalid tests
