import { isNull } from "./isNull";

test('Check isNull T/F', () => {
    expect(isNull(null)).toStrictEqual(true);
    expect(isNull(1)).toStrictEqual(false);
}); 