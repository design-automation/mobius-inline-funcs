import { hypot } from './hypot';

test('Check hypot of 2 numbers', () => {
    expect(hypot([3, 4])).toStrictEqual(5);
}); 

test('Check hypot of 3 numbers', () => {
    expect(hypot([3, 4, 5])).toStrictEqual(7.0710678118654755);
}); 

test('Check hypot of negative number', () => {
    expect(hypot(-5)).toStrictEqual(5);
}); 
