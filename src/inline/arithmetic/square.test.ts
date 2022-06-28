import { square } from './square';
import { InlineFuncs } from '../../index';

test('Check square list', () => {
    expect(square([1,2,3,4])).toStrictEqual([1,4,9,16]);
}); 

test('Check square num', () => {
    expect(square(5)).toStrictEqual(25);
}); 

test('Check square 2 args', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.square(123, 65)}).toThrow();
}); 