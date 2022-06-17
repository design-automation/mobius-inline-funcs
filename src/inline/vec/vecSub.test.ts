import { vecSub } from "./vecSub";
import { VY, VX, VZ, XY, YZ, ZX } from "../constants";

test('Check vecSub', () => {
    const vec1 = vecSub([1,2,5], [1,2,3])
    expect(vec1).toStrictEqual([0, 0, 2]);
}); 

test('Check vecSub overloaded', () => {
    const vec2 = vecSub([VZ, [1,2,3]], [[5,6,2],[1,1,1]])
    expect(vec2).toStrictEqual([
        [-5, -6, -1],
        [0, 1, 2]   
    ]);
}); 