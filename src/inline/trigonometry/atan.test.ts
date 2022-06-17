import { atan } from "./atan";

test('Check atan infinity', () => {
    expect(atan(Infinity)).toStrictEqual(1.5707963267948966);
}); 

test('Check atan overloaded', () => {
    expect(atan([1, 0])).toStrictEqual([0.7853981633974483, 0]);
}); 