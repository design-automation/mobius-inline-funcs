import { listSlice } from './listSlice';
import { listClass } from '../list';

test('Slice a list with no end', () => {
    expect(listSlice([0,1,2,3,4,5], 3)).toStrictEqual([3, 4, 5]);
}); 

test('Slice a list with end', () => {
    expect(listSlice([3,4,5,6,7,8,9], 3, 6)).toStrictEqual([6,7,8]);
}); 

test('listSlice if arg 1 is not a list error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listSlice(5, 3, 5)} ).toThrow();
}); 
