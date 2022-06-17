import { vecGtoL } from "./vecGtoL";
import { VY, VX, VZ, XY, YZ, ZX } from "../constants";

test('Check vecGtoL', () => {
    const vec1 = vecGtoL([1,2,5], YZ)
    expect(vec1).toStrictEqual([5, 1, 2]);
}); 

test('Check vecGtoL overloaded', () => {
    const vec2 = vecGtoL([VZ, [1,2,3]], [XY, ZX])
    expect(vec2).toStrictEqual([
        [0, 0, 1],
        [2, 3, 1]
    ]);
}); 