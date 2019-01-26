import { Triplet } from "./main";

import { expect } from "chai";

describe("9: Pythagorean triplets", () => {
    
    it("Triplet for 3-4-5", () => {
        expect(Triplet.getTriplet(1000)).to.equal(0);
    });

});
