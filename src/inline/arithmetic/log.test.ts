import { log } from './log';

test('Check log of a list of 2 numbers', () => {
    expect(log([1, 10])).toStrictEqual([0, 2.302585092994046]);
}); 

test('Check log of 0', () => {
    expect(log(0)).toStrictEqual(-Infinity);
}); 

test('Check log of -1', () => {
    expect(log(-1)).toStrictEqual(NaN);
}); 
