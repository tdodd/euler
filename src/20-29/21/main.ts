/**
 * https://projecteuler.net/problem=21
 * 
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * 
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * 
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 * The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 * 
 * Evaluate the sum of all the amicable numbers under 10000.
 */

export class AmicableNumbers {
    
    public static amicableSum(n: number): number {
        let sum = 0;
        let d = new Array(n); // Initialize an empty array of size n

        for (let i = 1; i < n; i++) {
            let dn = this.getDivisorSum(i);
            d[i] = dn; // Assign d(a) as index b in the array
            if (d[dn] === i && dn !== i) {
                sum += dn + i;
            }
        }

        return sum;
    }

    private static getDivisorSum(n: number): number {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

}
