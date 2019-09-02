/**
 * https://projecteuler.net/problem=28
 * 
 * Starting with the number 1 and moving to the right in a clockwise direction, a 5 by 5 spiral is formed as follows:
 * 
 *          21  22 23 24 25
 *          20  7  8  9  10
 *          19  6  1  2  11
 *          18  5  4  3  12
 *          17 16 15 14  13
 *  
 * It can be verified that the sum of the numbers on the diagonals is 101.
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

export class NumberSpiral {

    public static getSum(n: number): number {
        let sum = 0;

        // First, build the nxn matrix
        let matrix = NumberSpiral.buildMatrix(n);

        // Once the matrix is built, calculate the sum of the diagonals
        // Keep two pointers and move them towards each other
        let startPtr = 0;
        let endPtr = matrix.length - 1;
        
        for (let i = 0; i < n; i++) {
            // Get the value at each pointer
            let d1 = matrix[i][startPtr];
            let d2 = matrix[i][endPtr];

            // Don't double count the center cell of a matrix of odd length
            if (startPtr === endPtr) {
                sum += d1;
            } else {
                sum += d1 + d2;
            }
            
            // Move the pointers
            startPtr++;
            endPtr--;
        }

        return sum;
    }

    // Build a clockwise spiral nxn matrix
    private static buildMatrix(n: number): number[][] {
        let matrix: number[][] = NumberSpiral.getEmptyMatrix(n);
        let rowIdx = NumberSpiral.getCenter(n);
        let colIdx = NumberSpiral.getCenter(n);
        let dir = 0; // 0=RIGHT, 1=DOWN, 2=LEFT, 3=UP
        let chain = 1; // Current chain size
        let ctr = 1;
                    
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < (i < (n - 1) ? 2 : 3); j++) { // Change direction, and continue for the length of the chain
                for (let k = 0; k < chain; k++) { // Print the current cell, and shift by 1 in current direction
                    matrix[rowIdx][colIdx] = ctr++;
                    switch (dir) {
                        case 3: // UP
                            rowIdx--;
                            break;
                        case 2: // LEFT
                            colIdx--;
                            break;
                        case 1: // DOWN
                            rowIdx++;
                            break;
                        case 0: // RIGHT
                            colIdx++;
                            break;
                        default:
                            throw new Error("Invalid direction");
                    }
                }
                dir = (dir + 1) % 4; // Change direction when the chain is done
            }
            chain++;
        }

        matrix[rowIdx][colIdx] = ctr;
        
        return matrix;
    }
    
    // Init an empty nxn matrix
    private static getEmptyMatrix(n: number): number[][] {
        let matrix: number[][] = [];

        for (let i = 0; i < n; i++) {
            matrix[i] = [];
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }

        return matrix;
    }

    // Get the center coordinates of an nxn matrix
    public static getCenter(n: number): number {
        let isEven = n % 2 === 0;
        let center = Math.floor(n/2);
        if (!isEven) {
            return center
        }
        return center - 1;
    }

}
