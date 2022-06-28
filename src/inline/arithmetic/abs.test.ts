import { abs } from './abs';
import { InlineFuncs } from '../../index';

test('Check absolute of negative', () => {
    expect(abs(-1)).toStrictEqual(1);
}); 

test('Check absolute of positive, overloaded', () => {
    expect(abs([2, 3])).toStrictEqual([2, 3]);
}); 

test('Check abs 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.remap(abs(-1))}).toThrow();
});
