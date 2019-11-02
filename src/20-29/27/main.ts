import { EulerUtil } from "../../util/util";

/**
 * https://projecteuler.net/problem=27
 * 
 * Euler discovered the quadratic formula: n^2 + n + 41
 * The formula will produce 40 primes for the consecutive integer values 0 <= n <= 39
 * 
 * The formula n^2 − 79n + 1601 produces 80 primes for the consecutive values 0 <= n <= 79
 * The product of the coefficients, −79 and 1601, is −126,479
 * 
 * Considering quadratics of the form: n^2 + an + b, where |a| < 1000 and |b| <= 1000
 * where |n| is the absolute value of n (e.g. |11| = 11 and |−4| = 4)
 * 
 * Find the product of the coefficients a and b for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
 */

export class QuadraticPrimes {

    public static getProduct(limit: number): number {
        let currentMax = 0;
        let product = 0;

        for (let a = (-1 * limit); a < limit; a++) {
            for (let b = (-1 * limit); b <= limit; b++) {
                let consecutivePrimes = this.countConsecutivePrimes(a, b);
                if (consecutivePrimes > currentMax) {
                    currentMax = consecutivePrimes;
                    product = a * b;
                }
            }
        }

        return product;
    }

    // Count the number of consecutive primes for a given formula
    private static countConsecutivePrimes(a: number, b: number): number {
        let n = 0;
        let done = false;

        while (!done) {
            let formula = Math.pow(n, 2) + (a * n) + b;
            let isPrime = EulerUtil.isPrime(formula);
            if (!isPrime) {
                done = true;
            } else {
                n++;
            }
        }

        return n;
    }

}
