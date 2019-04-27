import { GridProduct } from "./main";

import { expect } from "chai";

describe("11: Largest adjacent product", () => {
    
    it("Get the largest product of a 4x4 grid", () => {
        let smallGrid = [
            [10, 11, 12, 13],
            [30, 31, 32, 33],
            [50, 49, 48, 47],
            [67, 68, 69, 70],
        ];
        expect(GridProduct.getProduct(smallGrid, 3)).to.equal(68 * 69 * 70);
    });
    
    it("Get the largest product of a 20x20 grid", () => {
        expect(GridProduct.getProduct(GridProduct.GRID, 4)).to.equal(70600674);
    });

});
