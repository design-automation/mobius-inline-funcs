import { listZip } from './listZip';
import { InlineFuncs } from '../../index';

test('Zip a list in ascending order ', () => {
    expect(listZip([[1,2,3], [4,5,6], [7,8,9]])).toStrictEqual([[1,4,7],[2,5,8],[3,6,9]]);
}); 

test('Zip a list with arg2 list ', () => {
    expect(listZip(['a', 'b'], [1, 2])).toStrictEqual([['a', 1,], ['b', 2]]);
}); 

test('Zip a list with arg3 list ', () => {
    //@ts-ignore
    expect(listZip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
}); 

test('Check error: Zip a list 1 arg, not LL', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listZip([1,2,3])} ).toThrow("list of lists");
});
