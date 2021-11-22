import {expect, it} from "@jest/globals";
import {translate} from "./translate.js"

//5
it("should translate hello to bonjour", ()=>{
    const result = translate("bonjour");
    expect(result).toBe("hello");
})