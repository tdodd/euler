/**
 * https://projecteuler.net/problem=7
 * 
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

export class Primes {

    public static nthPrime(n: number): number {
        let res = 0;
        let ctr = 2;
        let currentPrime = 1;
        while (currentPrime <= n) {
            if (this.isPrime(ctr)) {
                res = ctr;
                ctr++;
                currentPrime++;
            } else {
                ctr++;
            }
        }
        return res;
    }

    public static isPrime(n: number): boolean {
        let isPrime = true
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            let remainder = n % i;
            if (remainder === 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

}
