import { vecAng2 } from "./vecAng2";
import { VY, VX, VZ, PI } from "../constants";

test('Check vecAng2', () => {
    const vec1 = vecAng2(VY, VX, VZ)
    expect(vec1).toStrictEqual(PI * 3 / 2);
}); 

test('Check vecAng2 overloaded', () => {
    const vec2 = vecAng2([VY, VX], [VX, VZ], [VX, VY])
    expect(vec2).toStrictEqual([0, PI * 3 / 2]);
}); 