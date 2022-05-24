import { sum } from './sum';
import { arithmeticClass } from '../arithmetic';

test('Check sum numbers', () => {
    expect(sum([2, 1, 4, 3])).toStrictEqual(10);
}); 

test('Check sum 2 args', () => {
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.sum(123, 58)}).toThrow();
}); 