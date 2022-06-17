import { vecLen } from "./vecLen";
import { VY, VX, VZ, XY, YZ, ZX } from "../constants";

test('Check vecLen', () => {
    const vec1 = vecLen([1, 0, 1])
    expect(vec1).toStrictEqual(1.4142135623730951);
}); 

test('Check vecLen overloaded', () => {
    const vec2 = vecLen([VZ, [1,2,3], VY])
    expect(vec2).toStrictEqual([1, 3.741657386773941, 1]);
}); 