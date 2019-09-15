import { PandigitalProducts } from "./main";

import { expect } from "chai";


describe("32: Pandigital Products", () => {
    
    it("9-digit products", () => {
        expect(PandigitalProducts.getSum(9)).to.equal(45228);
    });
    
});
