import { vecAvg } from "./vecAvg";
import { VY, VX } from "../constants";

test('Check vecAvg 2 args', () => {
    const vec1 = vecAvg(VY, VX)
    expect(vec1).toStrictEqual([0.5,0.5,0]);
}); 

