import { PathSum } from "./main"; 

import { expect } from "chai";


describe("18: Maximum Path Sum", () => {
    
    it("Maximum path sum of a small triangle", () => {
        const smallTriangle = [
            [3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3],
        ];
        expect(PathSum.findPath(smallTriangle)).to.equal(23);
    });

    it("Maximum path sum of a large triangle", () => {
        expect(PathSum.findPath(PathSum.triangle)).to.eq(1074);
    });

});
