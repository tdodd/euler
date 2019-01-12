import { PrimeFactor } from "./main";

import { expect } from "chai";

describe("3: Largest Prime Factor", () => {
    
    it("Calculate Largest Prime Factor", () => {
        expect(PrimeFactor.largestFactor(600851475143)).to.equal(6857);
    });

});
