/**
 * https://projecteuler.net/problem=3
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 * 
 * Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73
 */

export class PrimeFactor {

    public static largestFactor(n: number): number {
        while(true) {
            let factor = this.primeFactor(n);
            if (factor < n) {
                n = n / factor;
            } else {
                return n;
            }
        }
    }

    public static primeFactor(n: number): number {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) return i;
        }
        return n;
    }

}
