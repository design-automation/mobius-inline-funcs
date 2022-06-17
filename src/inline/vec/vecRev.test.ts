import { vecRev } from "./vecRev";
import { VY, VX, VZ } from "../constants";

test('Check vecRev', () => {
    const vec1 = vecRev([1,-2,3],)
    expect(vec1).toStrictEqual([-1, 2, -3]);
}); 

test('Check vecRev overloaded', () => {
    const vec2 = vecRev([VZ, [-1,-2,3]])
    expect(vec2).toStrictEqual([[-0, -0, -1], [1,2,-3]])
}); 