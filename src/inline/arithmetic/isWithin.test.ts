import { isWithin } from "./isWithin";
import { InlineFuncs } from '../../index';

test('Check isWithin true', () => {
    expect(isWithin(8, 8, 20)).toStrictEqual(true);
}); 

test('Check isWithin false', () => {
    expect(isWithin(-2, -5, 30)).toStrictEqual(false);
}); 

test('Check isWithin 2 args/type error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.isWithin(123, [1,2,3])}).toThrow();
}); 