import { Triplet } from "./main";

import { expect } from "chai";

describe("9: Pythagorean triplets", () => {
    
    it("Triplet for 12", () => {
        let res: euler.Triplet = Triplet.getTriplet(12);
        expect(res.array).to.deep.equal([3,4,5]);
        expect(res.product).to.equal(60);
    });
    
    it("Triplet for 1000", () => {
        let res: euler.Triplet = Triplet.getTriplet(1000);
        expect(res.array).to.deep.equal([200,375,425]);
        expect(res.product).to.equal(31875000);
    });

});
