/**
 * https://projecteuler.net/problem=34
 * 
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * 
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 */

export class DigitFactorials {
    private static LIMIT = 100000;

    public static getSum(): number {
        let res = 0;
        
        for (let i = 3; i < this.LIMIT; i++) {
            let fact = this.miniFactorial(i);
            
            if (fact === i) {
                res += i;
            }
        }

        return res;
    }

    private static miniFactorial(n: number): number {
        let miniFact = 0;
        let str = n.toString();

        for (let i = 0; i < str.length; i++) {
            let char = parseInt(str[i]);
            let fact = this.factorial(char);
            miniFact += fact;
        }

        return miniFact;
    }
    
    private static factorial(n: number): number {
        let fact = 1;

        for (let i = n; i > 1; i--) {
            fact *= i;
        }
        
        return fact;
    }

}
