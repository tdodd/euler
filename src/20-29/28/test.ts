import { NumberSpiral } from "./main";

import { expect } from "chai";


describe("28: Sum of the diagonals in an nxn spiral", () => {
    
    it("2x2 spiral", () => {
        expect(NumberSpiral.getSum(2)).to.equal(10);
    });

    it("3x3 spiral", () => {
        expect(NumberSpiral.getSum(3)).to.equal(25);
    });

    it("4x4 spiral", () => {
        expect(NumberSpiral.getSum(4)).to.equal(56);
    });

    it("5x5 spiral", () => {
        expect(NumberSpiral.getSum(5)).to.equal(101);
    });

    it("1001x1001 spiral", () => {
        expect(NumberSpiral.getSum(1001)).to.equal(669171001);
    });

});
