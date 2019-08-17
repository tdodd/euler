import { NumberSpiral } from "./main";

import { expect } from "chai";


describe.only("28: Sum of the diagonals in an nxn spiral", () => {
    
    it("5x5 spiral", () => {
        expect(NumberSpiral.getSum(5)).to.equal(101);
    });

    it("1001x1001 spiral", () => {
        expect(NumberSpiral.getSum(1001)).to.equal(669171001);
    });

});
