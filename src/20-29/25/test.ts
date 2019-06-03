import { Fibonacci } from "./main";

import { expect } from "chai";


describe("25 - 1000-digit Fibonacci number", () => {
    
    it("Permutations of 1-3", () => {
        expect(Fibonacci.getFibonacciIndex(1000)).to.deep.equal(0);
    });
});
