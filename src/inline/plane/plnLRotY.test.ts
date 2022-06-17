import { plnLRotY } from "./plnLRotY";
import { XY, YZ, XZ, PI } from "../constants";

test('Check plnLRotY', () => {
    const pln1 = plnLRotY(XY, PI)
    expect(pln1[1][0]).toStrictEqual(-1);
}); 

test('Check plnLRotY overloaded', () => {
    const pln_lst = plnLRotY([YZ,XZ], [PI/2, PI])
    expect(pln_lst.length).toStrictEqual(2);
    expect(pln_lst[0][1][0]).toStrictEqual(-1);
    expect(pln_lst[1][1][0]).toStrictEqual(-1);
}); 