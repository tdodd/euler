import { Fibonnaci } from "./main";

import { expect } from "chai";

describe("2: Even Fibbonaci Sum", () => {
    
    it("Regular fibonnaci", () => {
        const terms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

        for (let i = 0; i < terms.length; i++) {
            expect(Fibonnaci.fibbonaci(i)).to.equal(terms[i]);
        }
    });
    
    it("Even fibbonaci up to 4 million", () => {
        let max = 4000000;
        let sum = 3524577;
        expect(Fibonnaci.fibbonaciSum(max)).to.equal(sum);
    });

});
