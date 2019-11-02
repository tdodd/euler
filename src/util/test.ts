
import { expect } from "chai";
import { readFileSync } from "fs";
import { join } from "path";

import { EulerUtil } from "./util";


describe("Euler Utils", () => {
    
    it("should generate all primes under 100k", () => {
        // Read the primes file
        let file = join(__dirname, "primes-to-100k.txt");
        let buffer = readFileSync(file);

        // Store the primes as strings in an array. Trim the last line break
        let expectedPrimes: string[] = buffer.toString().split("\r\n")
        expectedPrimes = expectedPrimes.slice(0, expectedPrimes.length - 1);

        let actualPrimes: string[] = [];

        for (let i = 0; i < 100000; i++) {
            let isPrime = EulerUtil.isPrime(i);
            if (isPrime) {
                actualPrimes.push(i.toString());
            }
        }

        expect(expectedPrimes).to.deep.equal(actualPrimes);
    });
    
});
