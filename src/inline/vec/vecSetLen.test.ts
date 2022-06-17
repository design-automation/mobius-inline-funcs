import { vecSetLen } from "./vecSetLen";
import { VY, VX, VZ, XY, YZ, ZX } from "../constants";

test('Check vecSetLen', () => {
    const vec1 = vecSetLen([1,2,5], 2)
    expect(vec1).toStrictEqual([0.36514837167011077, 0.7302967433402215, 1.8257418583505538]);
}); 

test('Check vecSetLen overloaded', () => {
    const vec2 = vecSetLen([VZ, [1,2,3]], [3, 4])
    expect(vec2).toStrictEqual([
        [0, 0, 3],
        [1.0690449676496976, 2.138089935299395, 3.2071349029490928]   
    ]);
}); 