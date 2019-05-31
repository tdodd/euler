import { Permutation } from "./main";

import { expect } from "chai";


describe("24 - Lexicographic Permutations", () => {

    it.only("Permutations of 0-2", () => {
        // 012   021   102   120   201   210
        expect(Permutation.getNthPermutation(0, [0,1,2])).to.equal("012");
        expect(Permutation.getNthPermutation(1, [0,1,2])).to.equal("021");
        expect(Permutation.getNthPermutation(2, [0,1,2])).to.equal("102");
        expect(Permutation.getNthPermutation(3, [0,1,2])).to.equal("120");
        expect(Permutation.getNthPermutation(4, [0,1,2])).to.equal("201");
        expect(Permutation.getNthPermutation(5, [0,1,2])).to.equal("210");
    });
    
    it("Permutations of A-C", () => {
        // ABC   ACB   BAC   BCA   CAB   CBA
        expect(Permutation.getNthPermutation(0, ["A","B","C"])).to.equal("ABC");
        expect(Permutation.getNthPermutation(1, ["A","B","C"])).to.equal("ACB");
        expect(Permutation.getNthPermutation(2, ["A","B","C"])).to.equal("BAC");
        expect(Permutation.getNthPermutation(3, ["A","B","C"])).to.equal("BCA");
        expect(Permutation.getNthPermutation(4, ["A","B","C"])).to.equal("CAB");
        expect(Permutation.getNthPermutation(5, ["A","B","C"])).to.equal("CBA");
    });
    
    it("1 millionth permutation of 0-9", () => {
        expect(Permutation.getNthPermutation(1000000, [0,1,2,3,4,5,6,7,8,9])).to.equal("2278391546010");        
    });

});
