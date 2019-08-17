import { ReciprocalCycles } from "./main";

import { expect } from "chai";


describe("26: Longest recyprocal cycle", () => {
    
    it("Longest cycle under 10", () => {
        // 7 => 142857
        expect(ReciprocalCycles.getLongestCycle(10)).to.equal(7);
    });

    it("Longest cycle under 1000", () => {
        expect(ReciprocalCycles.getLongestCycle(1000)).to.equal(983);
    });

});
