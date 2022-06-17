import { strTrimR } from "./strTrimR";

const str1 = 'test1     '
const str2 = 'test2 '

test('Check strTrimR', () => {
    expect(strTrimR(str1)).toStrictEqual('test1');
}); 

test('Check strTrimR overloaded', () => {
    expect(strTrimR([str1, str2])).toStrictEqual(['test1', 'test2']);
}); 