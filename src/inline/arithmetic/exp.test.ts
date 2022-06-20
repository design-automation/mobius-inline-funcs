import { exp } from './exp';
import { InlineFuncs } from '../../index';

test('Check exp of positive number', () => {
    expect(exp(5)).toStrictEqual(148.4131591025766);
}); 

test('Check exp of negative number', () => {
    expect(exp(-2)).toStrictEqual(0.1353352832366127);
}); 

test('Check exp of list', () => {
    expect(exp([0, 1, 2])).toStrictEqual([1, 2.718281828459045, 7.38905609893065]);
}); 

test('Check exp 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.exp(123, [1,2,3])}).toThrow();
});
