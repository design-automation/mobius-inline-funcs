import { acos } from "./acos";

test('Check acos NaN', () => {
    expect(acos(-2)).toStrictEqual(NaN);
}); 

test('Check acos overloaded', () => {
    expect(acos([-1, 0])).toStrictEqual([3.141592653589793, 1.5707963267948966]);
}); 