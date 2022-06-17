import { setInt } from "./setInt";

const lst1 = [1, 2, 3, 3, 4]
const lst2 = [2, 5, 6, 3]

test('Check setInt', () => {
    expect(setInt(lst1, lst2)).toStrictEqual([2, 3]);
}); 