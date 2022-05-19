import { listCopy } from './listCopy';
import { listClass } from '../list';

test('Copy a list', () => {
    expect(listCopy([1,2,3])).toStrictEqual([1,2,3]);
});

// test('Copy a list wrong number of args', () => {
//     const list_class = new listClass(true);
//     //@ts-ignore
//     expect(list_class.listCopy([1,2,3], 123)).toThrow();
// });

test('Copy a list and change value', () => {
    const list1 = [1,2,3];
    const list2 = listCopy(list1);
    list2[0] = 10;
    expect(list1[0]).toBe(1);
    expect(list2[0]).toBe(10);
});

test('Copy a list and change value in a sub-list', () => {
    const list1 = [1,2,[3]];
    const list2 = listCopy(list1);
    list2[2][0] = 10;
    expect(list1[2][0]).toBe(10);
    expect(list2[2][0]).toBe(10);
});
