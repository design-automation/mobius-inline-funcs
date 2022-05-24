import { prod } from './prod';
import { arithmeticClass } from '../arithmetic';

test('Check prod with 2 in list', () => {
    expect(prod([2, 3])).toStrictEqual(6);
}); 

test('Check prod 3 in list', () => {
    expect(prod([2, 3, 4])).toStrictEqual(24);
}); 

test('Check prod with array of 2 lists', () => {
    //@ts-ignore
    expect(prod([[2, 5], [4, 3]])).toStrictEqual(120);
}); 
