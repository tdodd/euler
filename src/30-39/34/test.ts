import { DigitFactorials } from "./main";

import { expect } from "chai";


describe("34: Digit Factorials", () => {
    
    it("Sum of all digit factorials", () => {
        expect(DigitFactorials.getSum()).to.equal(40730);
    });
    
});
