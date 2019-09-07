import { CoinSums } from "./main";

import { expect } from "chai";


describe("31: Coin sums", () => {
    
    it("Numbers of ways to make 50p", () => {
        expect(CoinSums.getCombinations(50)).to.equal(451);
    });
    
    it("Numbers of ways to make 1£", () => {
        expect(CoinSums.getCombinations(100)).to.equal(4563);
    });

    it("Numbers of ways to make 2£", () => {
        expect(CoinSums.getCombinations(200)).to.equal(73682);
    });
    

});
