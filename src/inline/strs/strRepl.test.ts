import { strRepl } from "./strRepl";

const str1 = 'Test'
const str2 = 'Test2'

test('Check strRepl', () => {
    expect(strRepl(str1, 'Test', 'New')).toStrictEqual('New');
}); 

test('Check strRepl overloaded', () => {
    expect(strRepl([str1, str2], 'Test', 'New')).toStrictEqual(['New', 'New2']);
}); 