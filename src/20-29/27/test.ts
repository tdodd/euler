import { QuadraticPrimes } from "./main";

import { expect } from "chai";


describe("27: Quadratic Primes", () => {
    
    it("Maximum number of primes for consecutive values of n < 1000", () => {
        expect(QuadraticPrimes.getProduct(1000)).to.equal(-59231);
    });

});
