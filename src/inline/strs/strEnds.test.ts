import { strEnds } from "./strEnds";

const str1 = 'testing123'
const str2 = 'no'

test('Check strEnds true', () => {
    expect(strEnds(str1, '123')).toStrictEqual(true);
}); 

test('Check strEnds overloaded true and false', () => {
    expect(strEnds([str1, str2], '123')).toStrictEqual([true, false]);
}); 