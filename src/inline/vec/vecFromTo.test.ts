import { vecFromTo } from "./vecFromTo";
import { VY, VX, VZ } from "../constants";

test('Check vecFromTo', () => {
    const vec1 = vecFromTo([1,2,5], [1,0,2])
    expect(vec1).toStrictEqual([0, -2, -3]);
}); 

test('Check vecFromTo only v1 overloaded', () => {
    const vec1 = vecFromTo([[1,2,5], VX], [1,0,2])
    expect(vec1).toStrictEqual([[0, -2, -3], [0, 0, 2]]);
}); 

test('Check vecFromTo v1, v2 overloaded', () => {
    const vec2 = vecFromTo([VZ, [1,2,3]], [[1,2,1],[0,8,2]])
    expect(vec2).toStrictEqual([
        [1, 2, 0],[-1, 6, -1]
    ]);
}); 