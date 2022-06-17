import { vecAng } from "./vecAng";
import { VY, VX, VZ, PI } from "../constants";

test('Check vecAng', () => {
    const vec1 = vecAng(VY, VX)
    expect(vec1).toStrictEqual(PI / 2);
}); 

test('Check vecAng overloaded', () => {
    const vec2 = vecAng([VY, VX], [VX, VZ])
    expect(vec2).toStrictEqual([PI / 2, PI / 2]);
}); 