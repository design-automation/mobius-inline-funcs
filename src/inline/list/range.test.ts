import { range } from './range';
import { InlineFuncs } from '../../index';

test('Check range from 0-4, 1 arg', () => {
    expect(range(5)).toStrictEqual([0,1,2,3,4]);
}); 

test('Check range from 1-5, 2 args', () => {
    expect(range(1,6)).toStrictEqual([1,2,3,4,5]);
}); 

test('Check odd number sequence, 3 args', () => {
    expect(range(1, 9, 2)).toStrictEqual([1, 3, 5, 7]);
}); 

test('Check wrong value error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.range([1,3,5])} ).toThrow();
}); 

test('Check 4 args error', () => {
    //@ts-ignore
    expect( () => {list_class.range(1,2,3,4)} ).toThrow();
}); 