import { AmicableNumbers } from "./main";

import { expect } from "chai";

describe("21: Amicable Numbers", () => {
    
    it("Amicable numbers under 10,000", () => {
        expect(AmicableNumbers.amicableSum(10000)).to.equal(31626);
    });

});
