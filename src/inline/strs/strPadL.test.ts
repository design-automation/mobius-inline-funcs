import { strPadL } from "./strPadL";

const str1 = 'Test'
const str2 = 'Test2'

test('Check strPadL with fill', () => {
    expect(strPadL(str1, 7, '123')).toStrictEqual('123Test');
}); 

test('Check strPadL no fill and overloaded', () => {
    expect(strPadL([str1, str2], 8)).toStrictEqual(['    Test', '   Test2']);
}); 