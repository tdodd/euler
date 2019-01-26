import { Primes } from "./main";

import { expect } from "chai";

describe("7: Nth prime number", () => {

    it("First 6 prime numbers", () => {
        expect(Primes.nthPrime(1)).to.equal(2);
        expect(Primes.nthPrime(2)).to.equal(3);
        expect(Primes.nthPrime(3)).to.equal(5);
        expect(Primes.nthPrime(4)).to.equal(7);
        expect(Primes.nthPrime(5)).to.equal(11);
        expect(Primes.nthPrime(6)).to.equal(13);
    });
    
    it("15th prime number", () => {
        expect(Primes.nthPrime(15)).to.equal(47);
    });
    
    it("10,001st prime number", () => {
        expect(Primes.nthPrime(10001)).to.equal(104743);
    });

});
