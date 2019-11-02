import { TruncatablePrimes } from "./main";

import { expect } from "chai";


describe("37: Truncatable Primes", () => {
    
    it("Get all truncatble primes", () => {
        expect(TruncatablePrimes.getSum()).to.equal(748317);
    });
    
});
