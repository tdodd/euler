/**
 * https://projecteuler.net/problem=26
 * 
 * A unit fraction contains 1 in the numerator.
 * The decimal representation of the unit fractions with denominators 2 to 10 are given:
 * 
 *  1/2     =   0.5
 *  1/3     =   0.(3)
 *  1/4     =   0.25
 *  1/5     =   0.2
 *  1/6     =   0.1(6)
 *  1/7     =   0.(142857)
 *  1/8     =   0.125
 *  1/9     =   0.(1)
 *  1/10    =   0.1
 * 
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle.
 * It can be seen that 1/7 has a 6-digit recurring cycle.
 * 
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

export class ReciprocalCycles {

    public static getLongestCycle(n: number): number {
        let longestCycle = 0;

        for (let i = 1; i <= n; i++) {
            let cycle = this.findPattern(i);
            if (cycle > longestCycle) {
                longestCycle = i;
            }
        }

        return longestCycle;
    }

    private static findPattern(n: number): number {
        let map: { [key: number]: number } = {};
        let state = 1;
        let ctr = 0;
        
        while (true) {
			if (map[state]) {
				return ctr - map[state];
            } else {
				map[state] = ctr;
                state = state * 10 % n;
                ctr++;
			}
		}
    }

}
