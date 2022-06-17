import { plnMove } from "./plnMove";
import { XY, YZ, XZ } from "../constants";

test('Check plnMove', () => {
    const pln1 = plnMove(XY, [5,2,0])
    expect(pln1).toStrictEqual([[5,2,0], [1,0,0], [0,1,0]]);
}); 

test('Check plnMove overloaded', () => {
    const pln_lst = plnMove([YZ, XZ], [[5,2,0], [1,1,0]])
    expect(pln_lst).toStrictEqual([
        [[5,2,0],[0, 1, 0],[0, 0, 1]],
        [[1, 1, 0],[1, 0, 0],[0, 0, 1]]
    ]);
}); 