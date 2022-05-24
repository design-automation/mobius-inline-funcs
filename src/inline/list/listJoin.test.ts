import { listJoin } from './listJoin';
import { listClass } from '../list';

test('Check joining two lists', () => {
    expect(listJoin([1,2,3], [4,5,6])).toStrictEqual([1,2,3,4,5,6]);
}); 

test('Check joining three lists', () => {
    expect(listJoin([1,2,3], [4], [5,[6,7]] )).toStrictEqual([1,2,3,4,5,[6,7]]);
}); 

test('Check joining integrs into a list', () => {
    expect(listJoin(1,2,3)).toStrictEqual([1,2,3]);
}); 

