/**
 * https://projecteuler.net/problem=22
 * 
 * Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 * 
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 * 
 * What is the total of all the name scores in the file?
 */

export class NameScore {
    private static ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    public static getScore(names: string[]): number {
        let score = 0;

        names = names.sort();
        for (let i = 0; i < names.length; i++) {
            let namesScore = this.getNameScore(names[i]);
            score += (i + 1) * namesScore;
        }
    
        return score;
    }

    private static getNameScore(name: string): number {
        let res = 0;

        for (let i = 0; i < name.length; i++) {
            let letter = name[i];
            let idx = this.ALPHABET.indexOf(letter.toLowerCase()) + 1;
            res += idx;
        }

        return res;
    }

}
