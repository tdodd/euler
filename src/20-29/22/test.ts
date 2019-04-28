import { NameScore } from "./main";

import { readFileSync } from "fs";
import { join } from "path";
import { expect } from "chai";

describe("22: Name Score", () => {
    
    it("Name score - single name", () => {
        expect(NameScore.getScore(["colin"])).to.equal(53);
    });
    
    it("Name score - names.txt", () => {
        let path = join(__dirname, "names.txt");
        let file = readFileSync(path);
        let names = file.toString();
        expect(NameScore.getScore(JSON.parse(`[${names}]`))).to.equal(871198282);
    });

});
