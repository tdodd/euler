import { Factorial } from "./main";

import { expect } from "chai";

describe("20: Factorial Digit Sum", () => {
    
    it("Factorial sum - 10", () => {
        expect(Factorial.sum(10)).to.equal(27);
    });
    
    it("Factorial sum - 100", () => {
        expect(Factorial.sum(100)).to.equal(734);
    });

});
