import { cosh } from "./cosh";

test('Check cosh', () => {
    expect(cosh(-1)).toStrictEqual(1.5430806348152437);
}); 

test('Check cosh overloaded', () => {
    expect(cosh([0,1])).toStrictEqual([1, 1.5430806348152437]);
}); 