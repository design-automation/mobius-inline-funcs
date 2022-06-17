import { plnLRotZ } from "./plnLRotZ";
import { XY, YZ, XZ, PI } from "../constants";

test('Check plnLRotZ', () => {
    const pln1 = plnLRotZ(XY, PI)
    expect(pln1[1][0]).toStrictEqual(-1);
    expect(pln1[2][1]).toStrictEqual(-1);
}); 

test('Check plnLRotZ overloaded', () => {
    const pln_lst = plnLRotZ([YZ,XZ], [PI/2, PI])
    expect(pln_lst.length).toStrictEqual(2);
    expect(pln_lst[0][1][2]).toStrictEqual(1);
    expect(pln_lst[1][1][0]).toStrictEqual(-1);
    expect(pln_lst[1][2][2]).toStrictEqual(-1);
}); 