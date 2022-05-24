import { abs } from './abs';
import { arithmeticClass } from '../arithmetic';

test('Check absolute of negative', () => {
    expect(abs(-1)).toStrictEqual(1);
}); 

test('Check absolute of positive', () => {
    expect(abs(2)).toStrictEqual(2);
}); 

test('Check abs 2 args error', () => {
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.remap(abs(-1))}).toThrow();
});
