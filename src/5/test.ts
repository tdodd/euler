import { SmallestDivisor } from "./main";

import { expect } from "chai";

describe("5: Smallest Even Divisor", () => {
    
    it("Smallest even divisor - 3, 4, and 5", () => {
        expect(SmallestDivisor.getDivisor(3)).to.equal(6);
        expect(SmallestDivisor.getDivisor(4)).to.equal(12);
        expect(SmallestDivisor.getDivisor(5)).to.equal(60);
    });
    
    it("Smallest even divisor - 10", () => {
        expect(SmallestDivisor.getDivisor(10)).to.equal(2520);
    });
    
    it("Smallest even divisor - 20", () => {
        expect(SmallestDivisor.getDivisor(20)).to.equal(232792560);
    });

});
