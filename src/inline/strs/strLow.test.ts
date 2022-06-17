import { strLow } from "./strLow";

const str1 = 'TesTING'
const str2 = 'Test2'

test('Check strLow', () => {
    expect(strLow(str1)).toStrictEqual('testing');
}); 

test('Check strLow overloaded', () => {
    expect(strLow([str1, str2])).toStrictEqual(['testing', 'test2']);
}); 