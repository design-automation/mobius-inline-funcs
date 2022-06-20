import { listFind } from './listFind';
import { InlineFuncs } from '../../index';

test('Find "a" from a list', () => {
    expect(listFind([1,2,3,"a",4,0], "a")).toStrictEqual(3);
}); 

test('Return null if cannot find value', () => {
    expect(listFind([1,2,3,4], "a")).toBeNull();
}); 

test('Check for 3 arg error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listFind([1,2,3], "a", [1,2])} ).toThrow();
}); 