/**
 * https://projecteuler.net/problem=17
 * 
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five
 *      there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total
 * 
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 * 
 * NOTE: Do not count spaces or hyphens.
 * 
 * For example,
 *      342 (three hundred and forty-two) contains 23 letters
 *      115 (one hundred and fifteen) contains 20 letters.
 * 
 * The use of "and" when writing out numbers is in compliance with British usage.
 */

export class LetterCount {
    private static ONES = [" ", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"];
    private static TENS = ["", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety"];
    
    public static count(n: number): number {
        let letterCount = 0;
        for (let i = 1; i <= n; i ++) {
            let numAsString = this.getNumberString(i);
            let cleanString = this.cleanString(numAsString, / /g, "");
            letterCount += cleanString.length;
        }
        return letterCount;
    }

    public static cleanString(str: string, pattern: RegExp, substitute: string): string {
        return str.replace(pattern, substitute);
    }

    public static getNumberString(n: number): string {
        let str = "";
        let numAsString = n.toString();
        let len = numAsString.length;

        // Thousands
        if (len === 4) {
            let thousands = parseInt(numAsString[len - 4]);
            str += this.ONES[thousands];
            str += " thousand"
        }

        // Hundreds
        if (len >= 3) {
            let hundreds = parseInt(numAsString[len - 3]);
            if (hundreds !== 0) {
                str += this.ONES[hundreds];
                str += " hundred";
                let requiresAnd = n % 100 !== 0;
                if (requiresAnd) {
                    str += " and"
                }
            }
        }

        // Tens
        if (len >= 2) {
            let tens = parseInt(numAsString[len - 2]);
            let ones = parseInt(numAsString[len - 1]);
            if (tens > 1) {
                str += this.TENS[tens];
                str += this.ONES[ones];
            } else {
                let idxStr = `${tens}${ones}`;
                let idxNum = parseInt(idxStr);
                str += this.ONES[idxNum];
            }
        }
        
        else {
            let ones = parseInt(numAsString[len - 1]);
            str += this.ONES[ones];
        }
        

        return str.trim();
    }

}


