import { Palindrome } from "./main";

import { expect } from "chai";

describe("4: Largest Palindrome Product", () => {
    
    it("Largest palindrome for 2-digit numbers", () => {
        expect(Palindrome.largestPalindrome(2)).to.equal(9009);
    });
    
    it("Largest palindrome for 3-digit numbers", () => {
        expect(Palindrome.largestPalindrome(3)).to.equal(90909);
    });
    
    it("Largest palindrome for 4-digit numbers", () => {
        expect(Palindrome.largestPalindrome(4)).to.equal(99000099);
    });

});
