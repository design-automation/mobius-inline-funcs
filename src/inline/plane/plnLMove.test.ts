import { plnLMove } from "./plnLMove";
import { XY, YZ, XZ } from "../constants";

test('Check plnLMove', () => {
    const pln1 = plnLMove(XY, [5,2,0])
    expect(pln1).toStrictEqual([[5,2,0], [1,0,0], [0,1,0]]);
}); 

test('Check plnLMove overloaded', () => {
    const pln_lst = plnLMove([YZ, XZ], [[5,2,0], [1,1,0]])
    expect(pln_lst).toStrictEqual([
        [[5,2,0],[0, 1, 0],[0, 0, 1]],
        [[1, 1, 0],[1, 0, 0],[0, 0, 1]]
    ]);
}); 