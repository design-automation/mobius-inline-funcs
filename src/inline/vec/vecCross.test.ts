import { vecCross } from "./vecCross";
import { VY, VX, VZ } from "../constants";

test('Check vecCross', () => {
    const vec1 = vecCross(VY, VX);
    expect(vec1).toStrictEqual([0, 0, -1]);
}); 

test('Check vecCross overloaded', () => {
    const vec2 = vecCross([VY, VX], [VZ, VY]);
    expect(vec2).toStrictEqual([[1, 0, 0], [0, 0, 1]]);
}); 

