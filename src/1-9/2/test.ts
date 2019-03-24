import { Fibonacci } from "./main";

import { expect } from "chai";

describe("2: Even Fibbonaci Sum", () => {
    //             0  1  2  3  4  5  6  7   8   9   10  11  12   13   14
    const terms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    
    it("Regular fibonnaci", () => {
        for (let i = 1; i < terms.length; i++) {
            expect(Fibonacci.fibonacci(i)).to.equal(terms[i]);
        }
    });
    
    it("Even fibbonaci up to 4 million", () => {
        let max = 4000000;
        expect(Fibonacci.evenFibonacci(0, max)).to.equal(0);
        expect(Fibonacci.evenFibonacci(1, max)).to.equal(0);
        expect(Fibonacci.evenFibonacci(3, max)).to.equal(2);
        expect(Fibonacci.evenFibonacci(4, max)).to.equal(2);
        expect(Fibonacci.evenFibonacci(6, max)).to.equal(10);
        expect(Fibonacci.evenFibonacci(10, max)).to.equal(44);
        expect(Fibonacci.evenFibonacci(3524577, max)).to.equal(4613732);
    });

});
