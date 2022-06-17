import { atanh } from "./atanh";

test('Check atanh NaN', () => {
    expect(atanh(-2)).toStrictEqual(NaN);
}); 

test('Check atanh overloaded', () => {
    expect(atanh([1, 0])).toStrictEqual([Infinity, 0]);
}); 