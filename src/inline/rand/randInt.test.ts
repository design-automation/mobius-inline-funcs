import { randInt } from "./randInt";

test('Check randInt no seed', () => {
    const check1 = randInt(0,4);
    expect(check1).toBeGreaterThanOrEqual(0);
    expect(check1).toBeLessThan(4)
    expect(Number.isInteger(check1)).toStrictEqual(true)
}); 

test('Check randInt with seed', () => {
    const check2 = randInt(0, 5, 3)
    expect(check2).toStrictEqual(1);
}); 