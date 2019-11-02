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
        if (n < 2) {
            return false;
        }
        
        else if (n == 2) {
            return true;
        }

        else {
            // Ignore even numbers
            if (n % 2 == 0) {
                return false;
            }

            // Check the cache before computing
            if (EulerUtil.primeNumberCache.hasOwnProperty(n)) {
                return true;
            }

            let limit = Math.floor(Math.sqrt(n));
            for (let i = 3; i <= limit; i += 2) {
                if (n % i == 0) {
                    return false;
                }
            }

            // Add prime to the cache
            Object.defineProperty(EulerUtil.primeNumberCache, n.toString(), { value: true, enumerable: true });
            return true;
        }
    }

}



