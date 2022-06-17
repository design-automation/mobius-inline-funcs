import { strTrim } from "./strTrim";

const str1 = "This\ is a \sentence"
const str2 = "   This used to have whitespace   "

test('Check strTrim line terminator', () => {
    expect(strTrim(str1)).toStrictEqual("This is a sentence");
}); 

test('Check strTrim overloaded and white space', () => {
    expect(strTrim([str1, str2])).toStrictEqual(["This is a sentence", "This used to have whitespace"]);
}); 