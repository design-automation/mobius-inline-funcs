import { isVec3 } from "./isVec3";

test('Check isVec3 T/F', () => {
    expect(isVec3([1,2,3])).toStrictEqual(true);
    expect(isVec3(['no'])).toStrictEqual(false);
}); 