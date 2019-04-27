import { AmicableNumbers } from "./main";

import { expect } from "chai";

describe.only("21: Amicable Numbers", () => {
    
    it("Amicable numbers: 220", () => {
        expect(AmicableNumbers.evaluate(220)).to.equal(284);
        expect(AmicableNumbers.evaluate(284)).to.equal(220);
    });
    
    it("Amicable numbers: 1000", () => {
        expect(AmicableNumbers.evaluate(1000)).to.equal(0);
    });

});
