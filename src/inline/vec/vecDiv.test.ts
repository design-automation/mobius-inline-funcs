import { vecDiv } from "./vecDiv";
import { VY, VX, VZ } from "../constants";

test('Check vecDiv not norm', () => {
    const vec1 = vecDiv(VY, 2)
    expect(vec1).toStrictEqual([0,0.5,0]);
}); 

test('Check vecDiv overloaded', () => {
    const vec2 = vecDiv([VZ, VX], [2,1])
    expect(vec2).toStrictEqual([[0,0,0.5], [1,0,0]]);
}); 