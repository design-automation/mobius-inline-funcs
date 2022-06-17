import { isVec2 } from "./isVec2";

test('Check isVec2 T/F', () => {
    expect(isVec2([1,2])).toStrictEqual(true);
    expect(isVec2(['no'])).toStrictEqual(false);
}); 