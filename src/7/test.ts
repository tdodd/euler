import { Product } from "./main";

import { expect } from "chai";

describe.only("6: Sum of Squares", () => {
    
    it("Sum of squares of the first 10 natural numbers", () => {
        expect(Product.largestProduct(4)).to.equal(5832);
    });
    
    it("Square of sum of the first 10 natural numbers", () => {
        expect(Product.largestProduct(13)).to.equal(-1);
    });

});
