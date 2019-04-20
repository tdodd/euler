import { PathSum } from "./main";

import { expect } from "chai";


describe("18: Maximum Path Sum", () => {
    
    it.only("Maximum path sum of a small triangle", () => {
        const smallTriangle = [
            [3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3],
        ];
        let res = PathSum.findPath(smallTriangle);
        expect(res.list).to.deep.equal([3, 7, 4, 9]);
        expect(res.sum).to.eq(23);
    });

    it("Maximum path sum of a large triangle", () => {
        let res = PathSum.findPath(PathSum.triangle);
        // expect(res.list).to.deep.equal([]);
        expect(res.sum).to.eq(1074);
    });

});
