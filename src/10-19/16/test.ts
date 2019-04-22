import { PowerDigitSum } from "./main";

import { expect } from "chai";

describe("16: Power Digit Sum", () => {
    
    it("Power digit sum of a small power (2^15)", () => {
        expect(PowerDigitSum.getSum(2, 15)).to.equal(26);
    });
    
    it("Power digit sum of a large power (2^1000)", () => {
        expect(PowerDigitSum.getSum(2, 1000)).to.equal(1366);
    });

});
