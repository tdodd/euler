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
