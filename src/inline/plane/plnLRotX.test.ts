import { plnLRotX } from "./plnLRotX";
import { XY, YZ, PI } from "../constants";

test('Check plnLRotX', () => {
    const pln1 = plnLRotX(XY, PI)
    expect(pln1[2][1]).toStrictEqual(-1);
}); 

test('Check plnLRotX overloaded', () => {
    const pln_lst = plnLRotX([YZ, XY], [PI/2, PI])
    expect(pln_lst.length).toStrictEqual(2);
    expect(pln_lst[0][2][0]).toStrictEqual(1);
    expect(pln_lst[1][2][1]).toStrictEqual(-1);
}); 