import { listRev } from './listRev';
import { listClass } from '../list';

test('Reverse a list', () => {
    expect(listRev([1,2,3])).toStrictEqual([3, 2, 1]);
}); 

test('Reverse a list with 2 args error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listRev([1,2,3], 123)} ).toThrow();
});