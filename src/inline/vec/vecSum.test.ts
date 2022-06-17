import { vecSum } from "./vecSum";
import { VY, VX } from "../constants";

test('Check vecSum 3 args', () => {
    const vec1 = vecSum([1,2,5], VY, VX)
    expect(vec1).toStrictEqual([2,3,5]);
}); 

