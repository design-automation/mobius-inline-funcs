import { strSub } from "./strSub";

const str1 = '012testing'
const str2 = '012check'

test('Check strSub without length', () => {
    expect(strSub(str1, 3)).toStrictEqual('testing');
}); 

test('Check strSub overloaded with length', () => {
    expect(strSub([str1, str2], 3, 4)).toStrictEqual(['test', 'chec']);
}); 