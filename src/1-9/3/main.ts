/**
 * https://projecteuler.net/problem=3
 * 
 * The prime factors of 13,195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600,851,475,143?
 * 
 * HINT: 0 and 1 are not prime numbers.
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
