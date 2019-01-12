import { MultiplesOf3and5 } from "./main";

import { expect } from "chai";

describe("1: Multiples of 3 and 5", () => {
    
    it("Find the sum of all multiples of 3 or 5 below 10", () => {
        expect(MultiplesOf3and5.findSum([3,5], 10)).to.equal(23);
    });
    
    it("Find the sum of all multiples of 3 or 5 below 1000", () => {
        expect(MultiplesOf3and5.findSum([3,5], 1000)).to.equal(266333);
    });

});
