
import { expect } from "chai";
import { readFileSync } from "fs";
import { join } from "path";

import { EulerUtil } from "./util";


describe("Euler Utils", () => {
    
    it("should generate all primes under 100k", () => {
        // Read the primes file
        let file = join(__dirname, "primes-to-100k.txt");
        let buffer = readFileSync(file);
        let expectedPrimes: string[] = buffer.toString().split("\r\n");

        let actualPrimes: string[] = [];

        for (let i = 0; i < 100000; i++) {
            let isPrime = EulerUtil.isPrime(i);
            if (isPrime) {
                actualPrimes.push(i.toString());
            }
        }

        actualPrimes.push("");

        expect(expectedPrimes).to.deep.equal(actualPrimes);
    });
    
});
