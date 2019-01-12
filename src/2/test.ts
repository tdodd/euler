import { Fibonnaci } from "./main";

import { expect } from "chai";

describe("2: Even Fibbonaci Sum", () => {
    //             0  1  2  3  4  5  6  7   8   9   10  11  12   13   14
    const terms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    
    it("Regular fibonnaci", () => {
        for (let i = 1; i < terms.length; i++) {
            expect(Fibonnaci.fibbonaci(i)).to.equal(terms[i]);
        }
    });
    
    it("Even fibbonaci up to 4 million", () => {
        let max = 4000000;

        expect(Fibonnaci.evenFibbonaci(0, max)).to.equal(0);
        expect(Fibonnaci.evenFibbonaci(1, max)).to.equal(0);
        expect(Fibonnaci.evenFibbonaci(3, max)).to.equal(2);
        expect(Fibonnaci.evenFibbonaci(4, max)).to.equal(2);
        expect(Fibonnaci.evenFibbonaci(6, max)).to.equal(10);
        expect(Fibonnaci.evenFibbonaci(10, max)).to.equal(44);
        expect(Fibonnaci.evenFibbonaci(3524577, max)).to.equal(4613732);
    });

});
