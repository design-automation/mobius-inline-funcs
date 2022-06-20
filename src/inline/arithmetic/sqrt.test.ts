import { sqrt } from './sqrt';
import { InlineFuncs } from '../../index';

test('Check sqrt number', () => {
    expect(sqrt(2)).toStrictEqual(1.4142135623730951);
}); 

test('Check sqrt list', () => {
    expect(sqrt([9,1,0,-1,-0])).toStrictEqual([3,1,0,NaN,-0]);
}); 

test('Check sqrt 2 args', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.sqrt(123, 2)}).toThrow();
}); 