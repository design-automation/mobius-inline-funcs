import { isStr } from "./isStr";

test('Check isStr T/F', () => {
    expect(isStr('yes')).toStrictEqual(true);
    expect(isStr(['no'])).toStrictEqual(false);
}); 