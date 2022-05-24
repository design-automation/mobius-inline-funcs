import { numToCurr } from "./numToCurr";

test('Check number to curr', () => {
    expect(numToCurr(232.4, "Usd", "en-AU")).toStrictEqual("USD\xa0232.40");
}); 



