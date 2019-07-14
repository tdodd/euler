import { Permutation } from "./main";

import { expect } from "chai";


describe("24 - Lexicographic Permutations", () => {
    
    it("Permutations of 1-3", () => {
        expect(Permutation.getNthPermutation(1, ["1", "2", "3"])).to.deep.equal(["1", "2", "3"]);
        expect(Permutation.getNthPermutation(2, ["1", "2", "3"])).to.deep.equal(["1", "3", "2"]);
        expect(Permutation.getNthPermutation(3, ["1", "2", "3"])).to.deep.equal(["2", "1", "3"]);
        expect(Permutation.getNthPermutation(4, ["1", "2", "3"])).to.deep.equal(["2", "3", "1"]);
        expect(Permutation.getNthPermutation(5, ["1", "2", "3"])).to.deep.equal(["3", "1", "2"]);
        expect(Permutation.getNthPermutation(6, ["1", "2", "3"])).to.deep.equal(["3", "2", "1"]);
    });
    
    it("1 millionth permutation of 0-9", () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let actual = Permutation.getNthPermutation(1000000, arr);
        expect(actual).to.deep.equal([2, 7, 8, 3, 9, 1, 5, 4, 6, 0]);        
    });

});
