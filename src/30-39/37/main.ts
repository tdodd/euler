import { EulerUtil } from "../../util/util";

/**
 * https://projecteuler.net/problem=37
 * 
 * The number 3,797 has an interesting property:
 * Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7.
 * Similarly we can work from right to left: 3797, 379, 37, and 3.
 * 
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

export class TruncatablePrimes {

    public static getSum(): number {
        let sum = 0;
        let count = 0;
        
        // Since there are only 11 such primes, stop once we reach eleven
        for (let i = 10; count < 11; i++) {
            if (this.isTruncatablePrime(i)) {
                // 23, 37, 53, 73, 313, 317, 373, 797, 3137, 3797
                sum += i;
                count++;
            }
        }

        return sum;
    }

    private static isTruncatablePrime(n: number): boolean {
        // Test if left-truncatable
		for (let i = 10; i <= n; i *= 10) {
			if (!EulerUtil.isPrime(n % i)) {
				return false;
            }
		}
		
		// Test if right-truncatable
		for (; n != 0; n = Math.floor(n/10)) {
			if (!EulerUtil.isPrime(n)) {
				return false;
            }
		}
		
		return true;
    }

}
