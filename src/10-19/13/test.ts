import { LargeSum } from "./main";

import { expect } from "chai";

describe("13: Large Sum", () => {

    it("First 3 digits of the sum of 5-digit numbers", () => {
        let numbers = [11111,22222,33333,44444,55555];
        expect(LargeSum.sum(3, numbers)).to.equal(166);
    });
    
    it("First 10 digits of the sum of 50-digit numbers", () => {
        expect(LargeSum.sum(10, LargeSum.NUMBERS)).to.equal(5537376230);
    });

});
