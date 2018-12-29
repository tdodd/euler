import { MultiplesOf3and5 } from "./main";

import { expect } from "chai";

describe("Multiples of 3 and 5", () => {
    
    it("Find the sum of all multiples of 3 or 5 below 10", () => {
        let sum = MultiplesOf3and5.findSum([3,5], 10);
        expect(sum).to.equal(23);
    });
    
    it("Find the sum of all multiples of 3 or 5 below 1000", () => {
        let sum = MultiplesOf3and5.findSum([3,5], 1000);
        expect(sum).to.equal(266333);
    });

});
