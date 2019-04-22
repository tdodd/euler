/**
 * https://projecteuler.net/problem=19
 * 
 * You are given the following information, but you may prefer to do some research for yourself:
 *      1 Jan 1900 was a Monday
 *      Thirty days has September,
 *      April, June and November.
 *      All the rest have thirty-one,
 *      Saving February alone,
 *      Which has twenty-eight, rain or shine.
 *      And on leap years, twenty-nine.
 * 
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * 
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

export class DayCount {

    public static countSundays(startYear: number, endYear: number): number {
        let sundays = 0;
        
        for (let i = startYear; i <= endYear; i++) {
            let year = i;
            let start = new Date(year, 0, 1);
            let end = new Date(++year, 0, 1);
            for (let d = start; d < end; d.setDate(d.getDate() + 1)) {
                if (d.getDay() === 0 && d.getDate() === 1) {
                    sundays++;
                }
            }
        }
        
        return sundays;
    }

}


