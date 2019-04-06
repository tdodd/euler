import { GridProduct } from "./main";

import { expect } from "chai";

describe.skip("11: Largest adjacent product", () => {

    it("Get the largest product of a small grid", () => {
        // let smallGrid = [
        //     [10, 11, 12, 13],
        //     [30, 31, 32, 33],
        //     [50, 49, 48, 47],
        //     [67, 68, 69, 70],
        // ];
        let res = 68 * 69 * 70;
        expect(GridProduct.getProduct(/*smallGrid, 3*/)).to.equal(res);
    });
    
    it("Get the largest product of a large grid", () => {
        expect(GridProduct.getProduct(/*GridProduct.GRID, 4*/)).to.equal(70600674);
    });

});
