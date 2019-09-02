import { QuadraticPrimes } from "./main";

import { expect } from "chai";


describe.only("27: Quadratic Primes", () => {
    
    it("Maximum number of primes for consecutive values of n", () => {
        expect(QuadraticPrimes.getProduct(-1)).to.equal(-59231);
    });

});
