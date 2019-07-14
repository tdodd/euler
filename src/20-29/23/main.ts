/**
 * https://projecteuler.net/problem=23
 * 
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 * 
 * For example, the sum of the proper divisors of 28 would be:
 *      1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 * 
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 * 
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
 * the smallest number that can be written as the sum of two abundant numbers is 24.
 * 
 * By mathematical analysis, it can be shown that all integers greater than 28,123 can be written as the sum of two abundant numbers.
 * However, this upper limit cannot be reduced any further by analysis even though it is known that
 * the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 * 
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

export class AbundantNumbers {
    private static MAX_NUMBER = 28124;
    private static lookupTable: boolean[] = [false];
    
    public static getSum(): number {
        let sum = 0;

        this.buildLookupTable(AbundantNumbers.MAX_NUMBER);

        for (let i = 1; i < AbundantNumbers.MAX_NUMBER; i++) {
            // Get numbers that can't be written as the sum of 2 abundant numbers
            if (!this.canBeWrittenAsSum(i)) {
                sum += i;
            }
        }

        return sum;
    }

    /**
     * Build a lookup table of abundant numbers below the specified limit
     * @param {number} limit the upper limit for calculation
     */
    private static buildLookupTable(limit: number): void {
        for (let i = 1; i < limit; i++) {
            let properDivisors = this.getProperDivisors(i);
            let divisorSum = properDivisors.reduce((prev, curr) => prev + curr);
            let isAbundant = divisorSum > i;
            this.lookupTable.push(isAbundant);
        }
    }

    /**
     * Get divisors for a number, exluding the number itself
     * @param {number} n the number
     */
    private static getProperDivisors(n: number): number[] {
        let divisors = [1];

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (n / i === i) {
                    divisors.push(i);
                } else {
                    divisors.push(i, n / i); 
                }
            }
        }

        return divisors;
    }

    /**
     * Test to see if a given number can be written as the sum of abundant numbers
     * @param {number} n the number to test
     */
    private static canBeWrittenAsSum(n: number): boolean {
        for (let i = 0; i <= n; i++) {
			if (this.lookupTable[i] && this.lookupTable[n - i])
				return true;
		}
		return false;
    }

}
