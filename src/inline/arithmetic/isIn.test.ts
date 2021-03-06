import { isIn } from "./isIn";
import { InlineFuncs } from '../../index';

test('Check isIn true', () => {
    expect(isIn(5, 8, 20)).toStrictEqual(true);
}); 

test('Check isIn false', () => {
    expect(isIn(-2, -5, 30)).toStrictEqual(false);
}); 

test('Check isIn 2 args/type error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.isIn(123, [1,2,3])}).toThrow();
});