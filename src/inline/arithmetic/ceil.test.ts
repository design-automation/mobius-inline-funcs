import { ceil } from './ceil';
import { arithmeticClass } from '../arithmetic';

test('Check ceil of positive number', () => {
    expect(ceil(0.95)).toStrictEqual(1);
}); 

test('Check ceil of positive integer', () => {
    expect(ceil(4)).toStrictEqual(4);
}); 

test('Check ceil of negative number', () => {
    expect(ceil(-7.004)).toStrictEqual(-7);
}); 

