import { TriangleDivisor } from "./main";

import { expect } from "chai";

describe("12: Triangle Divisor", () => {

    it("Triangle number with more than 5 divisors", () => {
        expect(TriangleDivisor.getDivisors(5)).to.equal(28);
    });
    
    it.skip("Triangle number with more than 500 divisors", () => {
        expect(TriangleDivisor.getDivisors(500)).to.equal(-1);
    });

});
