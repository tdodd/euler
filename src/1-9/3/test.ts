import { PrimeFactor } from "./main";

import { expect } from "chai";

describe("3: Largest Prime Factor", () => {
    
    it("Largest Prime Factor of a small number", () => {
        expect(PrimeFactor.largestFactor(13195)).to.equal(29);
    });
    
    it("Largest Prime Factor of a large number", () => {
        expect(PrimeFactor.largestFactor(600851475143)).to.equal(6857);
    });

});
