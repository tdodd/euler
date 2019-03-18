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
            sum += Primes.isPrime(i) ? i : 0;
        }
        return sum;
    }

    private static isPrime(n: number): boolean {
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
