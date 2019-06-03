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

    // Let us consider the string “ABCDEF”. Let previously printed permutation be “DCFEBA”.
    // The next permutation in sorted order should be “DEABCF”.
    // Let us understand above steps to find next permutation.
    // The ‘first character’ will be ‘C’. The ‘second character’ will be ‘E’. After swapping these two, we get “DEFCBA”.
    // The final step is to sort the substring after the character original index of ‘first character’.
    // Finally, we get “DEABCF”.

    // For example, given the sequence [1, 2, 3, 4] (which is in increasing order):
    // Index l = 3, because 4 is the only value in the sequence that is greater than 3 in order to satisfy the condition a[k] < a[l].
    // Index k = 2, because 3 is placed at an index that satisfies condition of being the largest index that is still less than a[k + 1] which is 4.
    // The values of a[2] and a[3] are swapped to form the new sequence [1,2,4,3].
    
    // The sequence after k-index a[2] to the final element is reversed.
    // Because only one value lies after this index (the 3), the sequence remains unchanged in this instance.
    // Thus the lexicographic successor of the initial state is permuted: [1,2,4,3].
    
    public static getNthPermutation<T>(pos: number, arr: T[]): T[] {
        // Since we're looking for the nth permutation, get the next permutation n times
        let nthPermutation = arr;

        for (let i = 1; i < pos; i++) {
            nthPermutation = this.nextPermutation(nthPermutation);
        }

        return nthPermutation;
    }

    public static nextPermutation<T>(arr: T[]): T[] {
        // Find the largest index k such that a[k] < a[k + 1]
        // If no such index exists, the permutation is the last permutation.
        let k = -1;
        for (let x = 0; x < arr.length - 1; x++) {
            if (arr[x] < arr[x + 1]) {
                k = x;
            }
        }
        
        // Find the largest index l greater than k such that a[k] < a[l].
        let l = -1;
        for (let y = k + 1; y < arr.length; y++) {
            if (arr[k] < arr[y]) {
                l = y;
            }
        }

        // Swap the value of a[k] with that of a[l].
        this.swap(arr, k, l);

        // Reverse the sequence from a[k + 1] up to and including the final element a[n].
        let end = arr.splice(k + 1).reverse();
        arr = arr.concat(end);

        return arr;
    }

    public static swap<T>(arr: T[], x: number, y: number): void {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

}
