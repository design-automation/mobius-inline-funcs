import { string } from "./string";

test('Check boolean to Str', () => {
    expect(string(true)).toStrictEqual("true");
}); 
