import { Primes } from "./main";

import { expect } from "chai";

describe("10: Summation of Primes", () => {

    it("Sum of primes below a small number", () => {
        expect(Primes.sumTo(5)).to.equal(5);
        expect(Primes.sumTo(10)).to.equal(17);
    });
    
    it("Sum of primes below a large number", () => {
        expect(Primes.sumTo(2000000)).to.equal(142913828922);
    });

});
