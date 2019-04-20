/**
 * https://projecteuler.net/problem=18
 * 
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *      
 *         [3]
 *        [7] 4
 *       2 [4] 6
 *      8 5 [9] 3
 * 
 * That is, 3 + 7 + 4 + 9 = 23.
 * 
 * Find the maximum total from top to bottom of the triangle below
 * 
 * NOTE: As there are only 16,384 routes, it is possible to solve this problem by trying every route.
 * 
 * However, Problem 67, is the same challenge with a triangle containing one-hundred rows;
 * it cannot be solved by brute force, and requires a clever method!
 */

export class PathSum {

    public static triangle = [
		[75],
		[95,64],
		[17,47,82],
		[18,35,87,10],
		[20,4,82,47,65],
		[19,1,23,75,3,34],
		[88,2,77,73,7,63,67],
		[99,65,4,28,6,16,70,92],
		[41,41,26,56,83,40,80,70,33],
		[41,48,72,33,47,32,37,16,94,29],
		[53,71,44,65,25,43,91,52,97,51,14],
		[70,11,33,28,77,73,17,78,39,68,17,57],
		[91,71,52,38,17,14,91,43,58,50,27,29,48],
		[63,66,4,68,89,53,67,30,73,16,69,87,40,31],
		[4,62,98,27,23,9,70,98,73,93,38,53,60,4,23],
    ];
    
    public static findPath(triangle: number[][]): euler.Triangle {
        let path: number[] = [];
        let sum = 0;

        return this.maxPath(triangle);

        // Traverse the tree, starting from the bottom
        for (let i = triangle.length - 1; i > 0; i--) {
            for (let j = 0; j < triangle[i].length; j++) {
                let row = triangle[i];
                let currentPath: number[] = [];
                let currentSum = 0;
            }
        }

        return {
            list: path,
            sum: sum
        }
    }

    private static maxPath(triangle: number[][]): any {
        // Base case, smallest possible triangle (last 2 rows)
        if (triangle.length === 2) {
            return Math.max(triangle[1][0], triangle[1][1]);
        }
        
        let leftSubTriangle = this.getSubTriangle(triangle.slice(1), 0);
        let rightTriangle = this.getSubTriangle(triangle.slice(1), 1);
        
        let lt = this.maxPath(leftSubTriangle);
        let rt = this.maxPath(rightTriangle);

        return Math.max(lt, rt);
    }

    //        3
    //       7 4
    //      2 4 6
    //     8 5 9 3
    private static getSubTriangle(triangle: number[][], idx: number): any {
        let subTriangle = [];
        let numRows = triangle.length;
        for (let i = 0; i < numRows; i++) {
            let chunk = i + idx;
            subTriangle.push(triangle[i].slice(idx, chunk + 1));
        }
        return subTriangle;
    }

}












        //                                   75
		//                                 95  64
		//                               17  47  82
		//                             18  35  87  10
		//                           20  04  82  47  65
		//                         19  01  23  75  3  34
		//                       88  02  77  73  7  63  67
		//                     99  65  04  28  6  16  70  92
		//                   41  41  26  56  83  40  80  70  33
		//                 41  48  72  33  47  32  37  16  94  29
		//               53  71  44  65  25  43  91  52  97  51  14
		//             70  11  33  28  77  73  17  78  39  68  17  57
		//           91  71  52  38  17  14  91  43  58  50  27  29  48
		//         63  66  04  68  89  53  67  30  73  16  69  87  40  31
		//       04  62  98  27  23  09  70  98  73  93  38  53  60  04  23
