import { setDif } from "./setDif";

const lst1 = [1,2,3,3,4]
const lst2 = [2, 5, 6, 3]

test('Check setDif', () => {
    expect(setDif(lst1, lst2)).toStrictEqual([1,3,4]);
}); 