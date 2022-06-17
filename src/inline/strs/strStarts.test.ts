import { strStarts } from "./strStarts";

const str1 = 'testing123'
const str2 = 'no'

test('Check strStarts true', () => {
    expect(strStarts(str1, 'test')).toStrictEqual(true);
}); 

test('Check strStarts overloaded true and false', () => {
    expect(strStarts([str1, str2], 'test')).toStrictEqual([true, false]);
}); 