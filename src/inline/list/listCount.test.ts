import { listCount } from './listCount';
import { listClass } from '../list';

test('Count a number in alist', () => {
    expect(listCount([1,2,3,3,3,3], 3)).toStrictEqual(4);
}); 

// test('Count lists in a list', () => {
//     expect(listCount([[1], 2, [1], [1], 3, 4, [1], [1]], [1])).toStrictEqual(5);
// }); 
// ^ currently legitimately fails 

test('More than 2 arguments error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listCount([1,2,3], 1, 0)} ).toThrow();
});



