/**
 * https://projecteuler.net/problem=4
 * 
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

export class Palindrome {

    public static largestPalindrome(n: number): number {
        if (n < 2) {
            return -1;
        } else {
            // Build upper and lower limits
            let upper = this.getUpperLimit(n);
            let lower = this.getLowerLimit(n);
            let res = 0;

            for (let i = lower; i < upper; i++) {
                for (let j = lower; j < upper; j++) {
                    let product = i * j;
                    if (this.isPalindrome(product) && product > res) {
                        res = product;
                    }
                }
            }

            return res;
        }
    }

    private static getUpperLimit(n: number): number {
        let res = 10;
        for (let i = 2; i <= n; i++) {
            res = parseInt(res.toString().concat("0"));
        }
        return res;
    }

    private static getLowerLimit(n: number): number {
        let res = 10;
        for (let i = 2; i < n; i++) {
            res = parseInt(res.toString().concat("0"));
        }
        return res;
    }

    private static reverse(str: string): string {
        let res = "";
        for (let i = str.length - 1; i >= 0; i--) {
            res = res.concat(str[i]);
        }
        return res;
    }

    private static isPalindrome(num: number): boolean {
        return num.toString() === this.reverse(num.toString())
    }
}
