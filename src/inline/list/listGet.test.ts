import { listGet } from './listGet';
import { InlineFuncs } from '../../index';

test('Check Two layers of listGet', () => {
    expect(listGet(listGet([0, [1, 2, 3] ], 1), 2)).toStrictEqual(3);
}); 

test('Check standard listGet', () => {
    expect(listGet([0, [1, 2, 3] ], 0)).toStrictEqual(0);
}); 

test('Check listGet with a list of indexes', () => {
    expect(listGet([5,6,7,8,9,10,11], [2, 3, 4])).toStrictEqual([7,8,9]);
}); 

test('Check listGet 3 args error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listGet([1,2,3], 1, 6)} ).toThrow();
});