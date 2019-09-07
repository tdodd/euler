import { DistinctPowers } from "./main";

import { expect } from "chai";


describe("30: Digit fifth powers", () => {
    
    it("Numbers composed of 4th powers", () => {
        expect(DistinctPowers.getNumTerms(4)).to.equal(19316);
    });
    
    it("Numbers composed of 5th powers", () => {
        expect(DistinctPowers.getNumTerms(5)).to.equal(443839);
    });

});
