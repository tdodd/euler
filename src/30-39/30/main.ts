/**
 * https://projecteuler.net/problem=30
 * 
 * Surprisingly, there are only three numbers that can be written as the sum of fourth powers of their digits:
 * 
 *      1,634 = 1^4 + 6^4 + 3^4 + 4^4
 *      8,208 = 8^4 + 2^4 + 0^4 + 8^4
 *      9,474 = 9^4 + 4^4 + 7^4 + 4^4
 * 
 * As 1 = 1^4 is not a sum it is not included.
 * The sum of these numbers is 1,634 + 8,208 + 9,474 = 19,316
 * 
 * Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

export class DistinctPowers {
    // Only iterate 1M times
    private static UPPER_LIMIT = 1000000;

    public static getNumTerms(pow: number): number {
        let sum = 0;

        for (let i = 2; i < this.UPPER_LIMIT; i++) {
            let str = i.toString();
            let temp = 0;

            for (let char of str) {
                let exp = Math.pow(parseInt(char), pow);
                temp += exp;
            }

            if (temp === i) { // Found a magic number
                sum += i;
            }
        }

        return sum;
    }

}
