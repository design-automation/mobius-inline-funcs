import { listFlat } from './listFlat';
import { InlineFuncs } from '../../index';

test('Check flattened list with depth 1', () => {
    expect(listFlat([1,2,3,[4,[5, [6] ], 7] ], 1)).toStrictEqual([1,2,3,4, [5, [6]], 7]);
}); 

test('Check fully flattened list', () => {
    expect(listFlat([1,2,3,[4,[5, [6] ], 7] ])).toStrictEqual([1,2,3,4,5,6,7]);
}); 

test('Check 3 args error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listFlat([1,2,3], 123, 3)} ).toThrow();
}); 