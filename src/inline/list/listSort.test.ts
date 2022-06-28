import { listSort } from './listSort';
import { InlineFuncs } from '../../index';

test('Sort a list in ascending order ', () => {
    expect(listSort([4,2,5,1,3])).toStrictEqual([1,2,3,4,5]);
}); 

test('Sort a list with arg2 list ', () => {
    expect(listSort(["c","i","e","n"], [3,2,4,1])).toStrictEqual(["n","i","c","e"]);
}); 

test('Sort a list wrong number of args', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listSort([1,2,3], [3,2,1], 4)} ).toThrow();
});