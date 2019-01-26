/**
 * https://projecteuler.net/problem=6
 * 
 * The sum of the squares of the first ten natural numbers is:
 *      12 + 22 + ... + 102 = 385
 * 
 * The square of the sum of the first ten natural numbers is:
 *      (1 + 2 + ... + 10)2 = 552 = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

export class Squares {

    public static diff(n: number): number {
        let sum = this.sumOfSquares(n);
        let square = this.squareOfSum(n);
        let diff = square - sum;
        return diff;
    }

    public static sumOfSquares(n: number): number {
        let res = 0;
        for (let i = 1; i <= n; i++) {
            let sq = Math.pow(i, 2);
            res += sq;
        }
        return res;
    }
    
    public static squareOfSum(n: number): number {
        let res = 0;
        for (let i = 1; i <= n; i++) {
            res += i;
        }
        let square = Math.pow(res, 2);
        return square;
    }

}
