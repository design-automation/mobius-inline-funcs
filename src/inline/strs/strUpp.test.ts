import { strUpp } from "./strUpp";

const str1 = 'TesTING'
const str2 = 'Test2'

test('Check strUpp', () => {
    expect(strUpp(str1)).toStrictEqual('TESTING');
}); 

test('Check strUpp overloaded', () => {
    expect(strUpp([str1, str2])).toStrictEqual(['TESTING', 'TEST2']);
}); 