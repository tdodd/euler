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
            // Build an n-digit number, starting with all 9's
            let a = 99;
            let b = 99;

            for (let i = 2; i < n; i++) {
                a = parseInt(a.toString().concat("9"));
                b = parseInt(b.toString().concat("9"));
            }

            let product = 0;

            while (true) {
                product = a * b;
                let str = product.toString();
                if (str === Palindrome.reverse(str)) {
                    break;
                } else {
                    b--;
                }
            }

            return product;
        }
    }

    private static reverse(str: string): string {
        let res = "";
        for (let i = str.length - 1; i >= 0; i--) {
            res = res.concat(str[i]);
        }
        return res;
    }
}
