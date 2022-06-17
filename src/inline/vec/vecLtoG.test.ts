import { vecLtoG } from "./vecLtoG";
import { VY, VX, VZ, XY, YZ, ZX } from "../constants";

test('Check vecLtoG', () => {
    const vec1 = vecLtoG([1,2,5], YZ)
    expect(vec1).toStrictEqual([2, 5, 1]);
}); 

test('Check vecLtoG overloaded', () => {
    const vec2 = vecLtoG([VZ, [1,2,3]], [XY, ZX])
    expect(vec2).toStrictEqual([
        [0, 0, 1],
        [3, 1, 2]
    ]);
}); 