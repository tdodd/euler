import { LatticePaths } from "./main";

import { expect } from "chai";

describe("15: Lattice Paths", () => {
    
    it("Number of paths for a 2x2 grid", () => {
        expect(LatticePaths.numPaths(2)).to.equal(6);
    });
    
    it("Number of paths for a 20x20 grid", () => {
        expect(LatticePaths.numPaths(20)).to.equal(-1);
    });

});
