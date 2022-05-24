import { listZip } from './listZip';
import { listClass } from '../list';

test('Zip a list in ascending order ', () => {
    expect(listZip([[1,2,3], [4,5,6], [7,8,9]])).toStrictEqual([[1,4,7],[2,5,8],[3,6,9]]);
}); 

test('Zip a list with arg2 list ', () => {
    expect(listZip(['a', 'b'], [1, 2])).toStrictEqual([['a', 1,], ['b', 2]]);
}); 

test('Zip a list wrong number of args', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listZip([1,2,3], [3,2,1], 4)} ).toThrow();
});

//When ZIP can accept multiple arguments, remeber to modify these test cases