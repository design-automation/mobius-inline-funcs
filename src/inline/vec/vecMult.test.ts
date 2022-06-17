import { vecMult } from "./vecMult";
import { VY, VX, VZ } from "../constants";

test('Check vecMult not norm', () => {
    const vec1 = vecMult([1,2,3], 2)
    expect(vec1).toStrictEqual([2, 4, 6]);
}); 

test('Check vecMult overloaded', () => {
    const vec2 = vecMult([VZ, [1,2,3]], [2, 3])
    expect(vec2).toStrictEqual([[0, 0, 2], [3, 6, 9]])
}); 