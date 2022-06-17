import { isUndef } from "./isUndef";

test('Check isUndef T/F', () => {
    expect(isUndef(undefined)).toStrictEqual(true);
    expect(isUndef(['no'])).toStrictEqual(false);
}); 