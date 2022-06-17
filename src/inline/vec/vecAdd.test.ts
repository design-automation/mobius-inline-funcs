import { vecAdd } from "./vecAdd";
import { VY, VX, VZ } from "../constants";

test('Check vecAdd not norm', () => {
    const vec1 = vecAdd(VY, VX)
    expect(vec1).toStrictEqual([1,1,0]);
}); 

test('Check vecAdd overloaded not norm', () => {
    const vec2 = vecAdd([VY, VX], [VX, VZ])
    expect(vec2).toStrictEqual([[1,1,0], [1,0,1]]);
}); 