import { log10 } from './log10';
import { arithmeticClass } from '../arithmetic';

test('Check log10 of a list of 2 numbers', () => {
    expect(log10([2, 100000])).toStrictEqual([0.3010299956639812, 5]);
}); 

test('Check log10 of 0', () => {
    expect(log10(0)).toStrictEqual(-Infinity);
}); 

test('Check log10 of -1', () => {
    expect(log10(-1)).toStrictEqual(NaN);
}); 
