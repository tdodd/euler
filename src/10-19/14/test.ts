import { CollatzSequence } from "./main";

import { expect } from "chai";

describe("14: Longest Collatz sequence", () => {
    
    it("Longest sequence for a number under 14", () => {
        expect(CollatzSequence.longest(13)).to.equal(9);
    });
    
    it("Longest sequence for a number under 1 million", () => {
        expect(CollatzSequence.longest(999999)).to.equal(837799);
    });

});
