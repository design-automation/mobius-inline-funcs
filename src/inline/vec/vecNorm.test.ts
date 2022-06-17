import { vecNorm } from "./vecNorm";
import { VY, VX, VZ } from "../constants";

test('Check vecNorm', () => {
    const vec1 = vecNorm([1,2,3])
    expect(vec1).toStrictEqual([0.2672612419124244, 0.5345224838248488, 0.8017837257372733]);
}); 

test('Check vecNorm overloaded', () => {
    const vec2 = vecNorm([VZ, [1,2,3]])
    expect(vec2).toStrictEqual([
        [0, 0, 1],[0.2672612419124244, 0.5345224838248488, 0.8017837257372733]
    ])
}); 