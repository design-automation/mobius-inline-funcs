import { listEq } from './listEq';
import { InlineFuncs } from '../../index';

test('Check if two lists are equal: False', () => {
    expect(listEq([1,2,3], [5,6,7])).toStrictEqual(false);
}); 

test('Check if two lists are equal: True', () => {
    expect(listEq([4,5,6], [4,5,6])).toStrictEqual(true);
}); 

test('Check 1 argument error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listEq([2])} ).toThrow();
}); 