import { DayCount } from "./main";

import { expect } from "chai";

describe("19: Counting Sundays", () => {
    
    it("Count Sundays from 2015 to 2025", () => {
        expect(DayCount.countSundays(2015, 2025)).to.equal(19);
    });
    
    it("Count Sundays from 2010 to 2050", () => {
        expect(DayCount.countSundays(2010, 2050)).to.equal(70);
    });
    
    it("Count Sundays from 1901 to 2000", () => {
        expect(DayCount.countSundays(1901, 2000)).to.equal(171);
    });

});
