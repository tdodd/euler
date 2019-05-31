/**
 * https://projecteuler.net/problem=24
 * 
 * A permutation is an ordered arrangement of objects.
 * For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * 
 * If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
 * 
 * The lexicographic permutations of 0, 1 and 2 are:
 *      012   021   102   120   201   210
 * 
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

export class Permutation {
    
    public static getNthPermutation<T>(pos: number, arr: T[]): T {
        let permutations: T[] = [];
        let len = arr.length;
        
        // Sort the array and use the first object
        arr = arr.sort();

        let elem = arr.join("");
        permutations.push(elem);

        for (let i = 1; i <= pos; i++) {
            let p = this.getNextPermutation();
            permutations.push(p);
        }

        return permutations[pos];
    }

    // Steps to generate the next higher permutation:
    //      1.  Take the previously printed permutation and find the rightmost character in it, which is smaller than its next character.
    //          Let us call this character as ‘first character’.
    //      2.  Now find the ceiling of the ‘first character’.
    //          Ceiling is the smallest character on right of ‘first character’, which is greater than ‘first character’.
    //          Let us call the ceil character as ‘second character’.
    // 3. Swap the two characters found in above 2 steps.
    // 4. Sort the substring (in non-decreasing order) after the original index of ‘first character’.

    // Let us consider the string “ABCDEF”. Let previously printed permutation be “DCFEBA”.
    // The next permutation in sorted order should be “DEABCF”.
    // Let us understand above steps to find next permutation.
    // The ‘first character’ will be ‘C’. The ‘second character’ will be ‘E’. After swapping these two, we get “DEFCBA”.
    // The final step is to sort the substring after the character original index of ‘first character’.
    // Finally, we get “DEABCF”.
    private static getNextPermutation(n: number) {
        let factorial = 1;

        for (let i = n; i > 1; i--) {
            factorial *= i;
        }

        return factorial
    }

}
