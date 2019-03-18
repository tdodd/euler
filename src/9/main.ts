/**
 * https://projecteuler.net/problem=9
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
 *      a^2 + b^2 = c^2
 * 
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

export class Triplet {

    public static getTriplet(n: number): euler.Triplet {
        let p = 0;
        let a: number[] = [];
        let flag = false;

        for(let i = 1; i < n; i++) {
            if (flag) break;
            for(let j = i + 1; j < n; j++) {
                // Generate a triple using Euclid's formula
                let triplet = this.euclids(j, i);
                let sum = triplet.reduce((prev, curr) => prev + curr);

                if (sum > n) break;
                
                else if (sum === n) {
                    p = triplet.reduce((prev, curr) => prev * curr);
                    a = triplet.sort();
                    flag = true;
                    break;
                }
            }
        }

        return { product: p, array: a };
    }

    /**
     * Euclid's formula generates a Pythagorean triple, given 2 numbers 'm' and 'n' such that: 0 < n < m
     * @param {number} m the first number
     * @param {number} n the second number
     * @return {number[]} an array containing the 3 numbers a, b, and c that compose the triple
     */
    private static euclids(m: number, n: number): number[] {
        const a = Math.pow(m, 2) - Math.pow(n, 2); // m2 - n2
        const b = 2 * m * n; // 2mn
        const c = Math.pow(m, 2) + Math.pow(n, 2); // m2 + n2
        return [a, b, c];
    }
    
}
