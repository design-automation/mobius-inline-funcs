import { isNaN } from "./isNaN";

test('Check isNaN T/F', () => {
    expect(isNaN(NaN)).toStrictEqual(true);
    expect(isNaN(1)).toStrictEqual(false);
}); 