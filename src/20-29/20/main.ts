/**
 * https://projecteuler.net/problem=20
 * 
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 * 
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800
 * The sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * 
 * Find the sum of the digits in the number 100!
 */
import * as BigInt from "big-integer";

export class Factorial {
    
    public static sum(n: number): number {
        let factorial = this.factorial(n);
        let factorialString = BigInt(factorial).toString();
        let sum = 0;
        for (let i = 0; i < factorialString.length; i++) {
            let num = parseInt(factorialString[i]);
            sum += num;
        }
        return sum;
    }

    private static factorial(n: number): number {
        let res = n;
        for (let i = n - 1; i > 1; i--) {
            res *= i;
        }
        return res;
    }

}
