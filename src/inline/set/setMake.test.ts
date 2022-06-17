import { setMake } from "./setMake";

const lst1 = [1, 2,2,2,2, 3, 3, 4]

test('Check setMake', () => {
    expect(setMake(lst1)).toStrictEqual([1, 2, 3, 4]);
}); 