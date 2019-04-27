/**
 * https://projecteuler.net/problem=16
 * 
 * 2^15 = 32,768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * 
 * What is the sum of the digits of the number 2^1000?
 */
import * as BigInt from "big-integer";

export class PowerDigitSum {

    public static getSum(n: number, power: number): number {
        let pow = BigInt(Math.pow(n, power));
        let numAsString = pow.toString();
        let length = numAsString.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            let numAtIndex = numAsString[i];
            sum += parseInt(numAtIndex);
        }
        return sum;
    }

}
