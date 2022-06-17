import { plnRot } from "./plnRot";
import { XY, YZ, XZ, PI, RZ, RX, RY } from "../constants";

test('Check plnRot', () => {
    const pln1 = plnRot(XY, RZ, PI)
    expect(pln1[1][0]).toStrictEqual(-1);
    expect(pln1[2][1]).toStrictEqual(-1);
}); 

test('Check plnRot overloaded', () => {
    const pln_lst = plnRot([YZ,XZ], [RX, RY], [PI/2, PI])
    expect(pln_lst.length).toStrictEqual(2);
    expect(pln_lst[0][1][2]).toStrictEqual(1);
    expect(pln_lst[1][1][0]).toStrictEqual(-1);
    expect(pln_lst[1][2][2]).toStrictEqual(-1);
}); 