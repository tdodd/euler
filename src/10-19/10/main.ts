import { EulerUtil } from "../../util/util";

/**
 * https://projecteuler.net/problem=10
 * 
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 */
export class Primes {

    public static sumTo(n: number): number {
        let sum = 0;
        for (let i = 2; i < n; i++) {
            sum += EulerUtil.isPrime(i) ? i : 0;
        }
        return sum;
    }

}
