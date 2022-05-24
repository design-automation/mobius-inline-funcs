import { numToStr } from "./numToStr";

test('Check num to Str', () => {
    expect(numToStr(1234)).toStrictEqual("1,234");
}); 
