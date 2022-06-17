import { acosh } from "./acosh";

test('Check acosh NaN', () => {
    expect(acosh(-1)).toStrictEqual(NaN);
}); 

test('Check acosh overloaded', () => {
    expect(acosh([1, 2])).toStrictEqual([0, 1.3169578969248166]);
}); 