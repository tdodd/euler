/**
 * https://projecteuler.net/problem=31
 * 
 * In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
 * 
 *      1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p)
 * 
 * It is possible to make £2 in the following way:
 * 
 *      1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * 
 * How many different ways can £2 be made using any number of coins?
 */

export class CoinSums {

    public static getCombinations(amount: number): number {
        let denominations = [1, 2, 5, 10, 20, 50, 100, 200]; // Coin denominations in pence (1p-2£)
        let combinations = this.waysToMakeChange(amount, denominations);
        return combinations;
    }
    
    private static waysToMakeChange(amount: number, denominations: number[]): number {
        // Intialize an array of zeros with indices up to amount
        let waysOfDoingNcents = [];
        for (let i = 0; i <= amount; i++) {
            waysOfDoingNcents[i] = 0;
        }

        // There is only 1 way to renturn 0 cents
        waysOfDoingNcents[0] = 1;

        for (let i = 0; i < denominations.length; i++) {
            // we can only start returning change with coins in our denominations
            let coin = denominations[i];
            
            // we start bottom up, each time reducing change amout with curr coin.
            for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
                let higherAmountRemainder = higherAmount - coin;
                // ways to create change is equivalent to reducing the problem to a known problem
                // and gaining all the ways to solve for smaller problems
                waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
            }
        }

        return waysOfDoingNcents[amount];
    }

}
