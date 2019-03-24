import { TriangleDivisor } from "./main";

import { expect } from "chai";

describe("12: Triangle Numbers", () => {

    it("First triangle number with more than 5 divisors", () => {
        expect(TriangleDivisor.getDivisors(5)).to.equal(28);
    });
    
    it("First triangle number with more than 50 divisors", () => {
        expect(TriangleDivisor.getDivisors(50)).to.equal(25200);
    });

});
