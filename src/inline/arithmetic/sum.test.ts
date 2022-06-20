import { sum } from './sum';
import { InlineFuncs } from '../../index';

test('Check sum numbers', () => {
    expect(sum([2, 1, 4, 3])).toStrictEqual(10);
}); 

test('Check sum 2 args', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.sum(123, 58)}).toThrow();
}); 