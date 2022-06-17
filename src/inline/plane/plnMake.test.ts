import { plnMake } from "./plnMake";

test('Check plnMake', () => {
    const pln1 = plnMake([1,1,1], [1,0,0], [-0,1,0])
    expect(pln1).toStrictEqual([
        [1,1,1], [1,0,0], [-0,1,0]
    ]);

}); 

test('Check plnMake overloaded', () => {
    const pln_lst = plnMake([[0, 0, 0], [1, 0, 0]], [[0, 1, 0], [0, 0, 1]], [[1, 1, 0], [0, 1, 0]])
    expect(pln_lst).toStrictEqual([
        [[0, 0, 0], [0, 1, 0], [1, 0, 0]],
        [[1, 0, 0], [0, 0, 1], [0, 1, 0]]
    ]);

}); 
