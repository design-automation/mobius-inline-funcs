import { vecEqual } from "./vecEqual";
import { VY, VX, VZ } from "../constants";

test('Check vecEqual false', () => {
    const vec1 = vecEqual([1,2,5], [1,0,2], 2)
    expect(vec1).toStrictEqual(false);
}); 

test('Check vecEqual T/F overloaded', () => {
    const vec2 = vecEqual([VZ, [1,2,3]], [[1,2,1],[0,8,2]], 2)
    expect(vec2).toStrictEqual([true, false]);
}); 