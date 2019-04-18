import { LetterCount } from "./main";

import { expect } from "chai";

describe("17: Number letter counts", () => {
    
    it("Conversion from number to string - tens", () => {
        expect(LetterCount.getNumberString(1)).to.equal("one");
        expect(LetterCount.getNumberString(9)).to.equal("nine");
        expect(LetterCount.getNumberString(10)).to.equal("ten");
        expect(LetterCount.getNumberString(19)).to.equal("nineteen");
        expect(LetterCount.getNumberString(20)).to.equal("twenty");
        expect(LetterCount.getNumberString(21)).to.equal("twenty one");
        expect(LetterCount.getNumberString(99)).to.equal("ninety nine");
    });
    
    it("Conversion from number to string - hundreds", () => {
        expect(LetterCount.getNumberString(100)).to.equal("one hundred");
        expect(LetterCount.getNumberString(101)).to.equal("one hundred and one");
        expect(LetterCount.getNumberString(109)).to.equal("one hundred and nine");
        expect(LetterCount.getNumberString(110)).to.equal("one hundred and ten");
        expect(LetterCount.getNumberString(111)).to.equal("one hundred and eleven");
        expect(LetterCount.getNumberString(119)).to.equal("one hundred and nineteen");
        expect(LetterCount.getNumberString(120)).to.equal("one hundred and twenty");
        expect(LetterCount.getNumberString(121)).to.equal("one hundred and twenty one");
        expect(LetterCount.getNumberString(999)).to.equal("nine hundred and ninety nine");
    });
    
    it("Letter count - 5", () => {
        expect(LetterCount.count(5)).to.equal(19);
    });
    
    it("Letter count - 1000", () => {
        expect(LetterCount.count(1000)).to.equal(21124);
    });

});
