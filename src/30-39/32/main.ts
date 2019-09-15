/**
 * https://projecteuler.net/problem=32
 *  
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.
 * For example, the 5-digit number, 15234, is 1 through 5 pandigital.
 * 
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254,
 * containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 * 
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

export class PandigitalProducts {

    public static getSum(n: number): number {
        let sum = 0;
        let digits = "";

        for (let d = 1; d <= n; d++) {
            digits += d.toString();
        }

        // We need an upper limit for how many times we should loop
        // The total number of digits for x * y = z should be n
        // ex: for n=9, 39 * 186 = 7254 has 9 total digits
        // So if we use up 5 digits for x * y, we have 4 digits remaining
        let limit = 10 ** (Math.floor(n / 2));

        // Keep track of products we've already calculated
        let seen: { [num: number]: boolean } = {};

        for (let i = 1; i <= limit; i++) {
            for (let j = 1; j <= Math.sqrt(i) + 1; j++) {
                // Work our way backwords.
                // Given a number and its divisor, get the other number in the product
                if (i % j === 0) {
                    let k = Math.floor(i / j);
                    let identity = i.toString() + j.toString() + k.toString();
                    if (identity.length === n) {
                        // Returns true if an n-digit number contains each digit from 1 to n exactly once
                        let pandigital = identity.split("").sort().join("") === digits;
                        if (pandigital && !seen[i]) {
                            sum += j * k;
                            seen[i] = true;
                        }
                    }
                }
            }
        }

        return sum;
    }

}
