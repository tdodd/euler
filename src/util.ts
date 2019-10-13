/**
 * This file contains common, re-usable utility functions for solving problems
 */
export class EulerUtil {
    // Maintain a cache of prime numbers for faster solving
    private static primeNumberCache: { [num: string]: boolean } = {};
    
    /**
     * Test whether a number is prime or not
     * Primes are only divisible by 1 and themselves
     */
    public static isPrime(n: number): boolean {
        // Check the cache first
        if (EulerUtil.primeNumberCache.hasOwnProperty(n)) {
            return EulerUtil.primeNumberCache[n];
        }

        // If it's not in the cache, compute
        for (let i = 2; i < Math.abs(n); i++) {
            if (n % i === 0) {
                Object.defineProperty(EulerUtil.primeNumberCache, n.toString(), { value: false, enumerable: true });
                return false;
            }
        }

        Object.defineProperty(EulerUtil.primeNumberCache, n.toString(), { value: true, enumerable: true });
        return true;
    }

}



