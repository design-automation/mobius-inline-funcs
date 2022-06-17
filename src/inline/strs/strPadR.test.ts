import { strPadR } from "./strPadR";

const str1 = 'Test'
const str2 = 'Test2'

test('Check strPadR with fill', () => {
    expect(strPadR(str1, 7, '123')).toStrictEqual('Test123');
}); 

test('Check strPadR no fill and overloaded', () => {
    expect(strPadR([str1, str2], 8)).toStrictEqual(['Test    ', 'Test2   ']);
}); 