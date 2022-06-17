import { strTrimL } from "./strTrimL";

const str1 = '     test1'
const str2 = ' test2'

test('Check strTrimL', () => {
    expect(strTrimL(str1)).toStrictEqual('test1');
}); 

test('Check strTrimL overloaded', () => {
    expect(strTrimL([str1, str2])).toStrictEqual(['test1', 'test2']);
}); 