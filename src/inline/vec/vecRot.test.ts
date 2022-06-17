import { vecRot } from "./vecRot";
import { VY, VX, VZ, PI } from "../constants";

test('Check vecRot', () => {
    const vec1 = vecRot([1,-2,3], VZ, PI)
    expect(vec1).toStrictEqual([-0.9999999999999998, 2, 3]);
}); 

test('Check vecRot v1 and ang overloaded', () => {
    const vec2 = vecRot([VX, [-1,-2,3]], VZ, [PI/2, PI])
    expect(vec2).toStrictEqual([
        [2.220446049250313e-16, 1, 0],
        [1.0000000000000004, 2, 3]
        ])
}); 

test('Check vecRot v2 overloaded', () => {
    const vec3 = vecRot(VX, [VY, VZ], PI)
    expect(vec3).toStrictEqual([
        [-1, 0, -1.2246467991473532e-16],
        [-1, 1.2246467991473532e-16, 0]
        ])
}); 

