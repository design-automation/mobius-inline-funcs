import { round } from './round';
import { arithmeticClass } from '../arithmetic';

test('Check round of a list', () => {
    expect(round([20.49, 20.5, 42, -20.5])).toStrictEqual([20, 21, 42, -20]);
}); 

test('Check round of negative number', () => {
    expect(round(-20.51)).toStrictEqual(-21);
}); 

test('Check round 2 args/type error', () => {
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.round(123, 2321.4)}).toThrow();
}); 
