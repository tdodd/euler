import { Squares } from "./main";

import { expect } from "chai";

describe.only("6: Sum of Squares", () => {
    
    it("Sum of squares of the first 10 natural numbers", () => {
        expect(Squares.sumOfSquares(10)).to.equal(385);
    });
    
    it("Square of sum of the first 10 natural numbers", () => {
        expect(Squares.squareOfSum(10)).to.equal(3025);
    });
    
    it("Difference of square and sum of the first 100 natural numbers", () => {
        expect(Squares.diff(100)).to.equal(25164150);
    });

});
