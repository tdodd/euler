import { EulerUtil } from "../../util/util";

/**
 * https://projecteuler.net/problem=35
 * 
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * 
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?
 */

export class CircularPrimes {

    public static getNumCircularPrimes(limit: number): number {
        let res = 0;
        
        for (let i = 2; i <= limit; i++) {
            let isCircularPrime = this.isCircularPrime(i);
            if (isCircularPrime) {
                res++;
            }
        }

        return res;
    }

    private static isCircularPrime(num: number): boolean {
        let str = num.toString();
        
        if (str.length === 1) {
            return EulerUtil.isPrime(num);
        } else {
            for (let i = 0; i < str.length; i++) {
                if (!EulerUtil.isPrime(parseInt(str))) {
                    return false;
                }
                str = this.shift(str);
            }
        }
        
        return true;
    }

    // Shift the characters in a string over by 1
    private static shift(str: string): string {
        return str[str.length - 1] + str.substring(0, str.length - 1);
    }

}
