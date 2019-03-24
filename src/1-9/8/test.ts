import { Product } from "./main";

import { expect } from "chai";

describe("8: Largest Adjacent Product", () => {
    
    it("Largest 4 adjacent digits in the 1000-digit number", () => {
        expect(Product.largestProduct(4)).to.equal(5832);
    });
    
    it("Largest 13 adjacent digits in the 1000-digit number", () => {
        expect(Product.largestProduct(13)).to.equal(23514624000);
    });

});
