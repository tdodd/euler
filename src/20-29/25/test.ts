import { FibonacciIndex } from "./main";

import { expect } from "chai";


describe("25 - 1000-digit Fibonacci number", () => {
    
    it("First number that contains 2 digits", () => {
        expect(FibonacciIndex.getIndex(2)).to.equal(7);
    });

    it("First number that contains 3 digits", () => {
        expect(FibonacciIndex.getIndex(3)).to.equal(12);
    });
    
    it("First number that contains 4 digits", () => {
        expect(FibonacciIndex.getIndex(4)).to.equal(17);
    });
    
    it("First number that contains 5 digits", () => {
        expect(FibonacciIndex.getIndex(5)).to.equal(21);
    });
    
    it.skip("First number that contains 1000 digits", () => {
        expect(FibonacciIndex.getIndex(1000)).to.equal(4782);
    });

});
