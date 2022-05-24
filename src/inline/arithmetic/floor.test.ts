import { floor } from './floor';
import { arithmeticClass } from '../arithmetic';

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
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.floor(123, [1,2,3])}).toThrow();
});
