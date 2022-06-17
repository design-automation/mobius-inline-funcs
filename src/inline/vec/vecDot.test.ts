import { vecDot } from "./vecDot";
import { VY, VX, VZ } from "../constants";

test('Check vecDot not norm', () => {
    const vec1 = vecDot([1,2,3], [1,0,2])
    expect(vec1).toStrictEqual(7);
}); 

test('Check vecDot overloaded', () => {
    const vec2 = vecDot([VZ, [1,2,3]], [[1,2,1],[0,3,2]])
    expect(vec2).toStrictEqual([1, 12]);
}); 