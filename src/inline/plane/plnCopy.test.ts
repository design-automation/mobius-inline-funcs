import { plnCopy } from "./plnCopy";
import { XY, YZ, XZ } from "../constants";

const pln1 = plnCopy(XY)
const pln_lst = plnCopy([YZ, XZ])

test('Check plnCopy', () => {
    expect(pln1).toStrictEqual([[0,0,0], [1,0,0], [0,1,0]]);
}); 

test('Check plnCopy overloaded', () => {
    expect(pln_lst).toStrictEqual([YZ, XZ]);
}); 