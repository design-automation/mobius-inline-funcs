import { isBool } from "./isBool";

test('Check isBool T/F', () => {
    expect(isBool(true)).toStrictEqual(true);
    expect(isBool(1)).toStrictEqual(false);
}); 