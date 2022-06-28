import { floor } from './floor';
import { InlineFuncs } from '../../index';

test('Check floor of positive number', () => {
    expect(floor(45.95)).toStrictEqual(45);
}); 

test('Check floor of negative number', () => {
    expect(floor(-45.05)).toStrictEqual(-46);
}); 

test('Check floor of list', () => {
    expect(floor([1.1, 2, 3.5, -3.2])).toStrictEqual([1, 2, 3, -4]);
}); 

test('Check floor 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.floor(123, [1,2,3])}).toThrow();
});
