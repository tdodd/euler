/**
 * https://projecteuler.net/problem=36
 * 
 * The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
 * 
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 * (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

export class DoubleBasePalindromes {

    public static getSum(limit: number): number {
        let sum = 0;
        
        for (let i = 1; i < limit; i++) {
            let isPalindromeBase10 = this.isPalindrome(i.toString());
            if (isPalindromeBase10) {
                if (this.isPalindrome(i.toString(2))) {
                    sum += i;
                }
            }
        }

        return sum;
    }

    private static isPalindrome(str: string): boolean {
        if (str.length === 1) {
            return true;
        }
        
        // Any number with leading 0s cannot be a palindrome
        if (str[str.length - 1] === "0") {
            return false;
        }
        
        let reverse = "";
        for (let i = 1; i <= str.length; i++) {
            let pos = str.length - i;
            reverse += str[pos];
        }

        return reverse === str;
    }

}
