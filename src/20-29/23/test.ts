import { AbundantNumbers } from "./main";

import { expect } from "chai";


describe("23: Abundant Numbers", () => {

    it("Sum of all positive integers", () => {
        expect(AbundantNumbers.getSum()).to.equal(4179871);
    });

});
