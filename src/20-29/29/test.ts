import { DistinctPowers } from "./main";

import { expect } from "chai";


describe("29: Number of distinct powers", () => {
    
    it("Number of terms for powers under 5", () => {
        expect(DistinctPowers.getNumTerms(5)).to.equal(15);
    });
    
    it("Number of terms for powers under 100", () => {
        expect(DistinctPowers.getNumTerms(100)).to.equal(9220);
    });

});
