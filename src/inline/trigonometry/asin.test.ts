import { asin } from "./asin";

test('Check asin NaN', () => {
    expect(asin(-2)).toStrictEqual(NaN);
}); 

test('Check asin overloaded', () => {
    expect(asin([-1, 0])).toStrictEqual([-1.5707963267948966, 0]);
}); 