import { CircularPrimes } from "./main";

import { expect } from "chai";


describe("35: Circular Primes", () => {
    
    it("Number of circular primes below 100", () => {
        expect(CircularPrimes.getNumCircularPrimes(100)).to.equal(13);
    });
    
    it.skip("Number of circular primes below 1,000,000", () => {
        expect(CircularPrimes.getNumCircularPrimes(1000000)).to.equal(55);
    });
    
});
