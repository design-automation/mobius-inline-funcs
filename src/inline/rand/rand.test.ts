import { rand } from "./rand";

test('Check rand no seed', () => {
    const check1 = rand(0,4);
    expect(check1).toBeGreaterThanOrEqual(0);
    expect(check1).toBeLessThan(4)
    expect(typeof check1).toBe('number')
}); 

test('Check rand with seed', () => {
    const check2 = rand(0, 5, 3)
    expect(check2).toStrictEqual(1.0004029933611491);
}); 