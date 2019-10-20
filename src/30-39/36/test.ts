import { DoubleBasePalindromes } from "./main";

import { expect } from "chai";


describe("36: Double base palindromes", () => {
    
    it("Sum of all double base palindromes below 1,000,000", () => {
        expect(DoubleBasePalindromes.getSum(1000000)).to.equal(872187);
    });
    
});
