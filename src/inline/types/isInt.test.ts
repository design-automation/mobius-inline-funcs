import { isInt } from "./isInt";

test('Check isInt T/F', () => {
    expect(isInt(0.233545)).toStrictEqual(false);
    expect(isInt(1)).toStrictEqual(true);
}); 