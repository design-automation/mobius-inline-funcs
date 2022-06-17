import { isNum } from "./isNum";

test('Check isNum T/F', () => {
    expect(isNum(0.233545)).toStrictEqual(true);
    expect(isNum(['no'])).toStrictEqual(false);
}); 