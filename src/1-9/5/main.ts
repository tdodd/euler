/**
 * https://projecteuler.net/problem=5
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

export class SmallestDivisor {

    public static getDivisor(n: number): number {
        let divisor = 2;
        let idx = 2;

        while (idx <= n) {
            let remainder = divisor % idx;
            if (remainder === 0) {
                idx++;
            } else {
                divisor++;
                idx = 2;
            }
        }

        return divisor;
    }
}
