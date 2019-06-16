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
    
    public static getSum(): number {
        let sum = 0;
        let abundantNums = this.getAbundantNumbers(AbundantNumbers.MAX_NUMBER);

        for (let i = 1; i < AbundantNumbers.MAX_NUMBER; i++) {
            if (!this.canBeWrittenAsSum(abundantNums, i)) {
                sum += i;
            }
        }

        return sum;
    }

    private static getProperDivisors(n: number): number[] {
        let divisors = [1];

        for (let i = 2; i < n; i++) {
            let remainder = n % i;
            if (remainder === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    private static getAbundantNumbers(limit: number): number[] {
        let abundantNums: number[] = [];

        for (let i = 1; i < limit; i++) {
            let properDivisors = this.getProperDivisors(i);
            let divisorSum = properDivisors.reduce((prev, curr) => prev + curr);
            let isAbundant = divisorSum > i;
            if (isAbundant) {
                abundantNums.push(i);
            }
        }

        return abundantNums;
    }

    private static canBeWrittenAsSum(arr: number[], n: number): boolean {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {

                let n1 = arr[i];
                let n2 = arr[j];
                let s = n1 + n2;

                if (s > n) {
                    return false;
                }

                if (s === n) {
                    return true;
                }

            }
        }
        return false;
    }

}
