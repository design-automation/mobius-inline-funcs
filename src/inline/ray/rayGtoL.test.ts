import { rayGtoL } from "./rayGtoL";
import { XY, YZ, XZ, RX, RY, RZ } from "../constants";

test('Check rayGtoL', () => {
    const ray1 = rayGtoL(RX, XY)
    expect(ray1).toStrictEqual([
        [0, 0, 0],
        [1, 0, 0]
        ]);
}); 

test('Check rayGtoL overloaded', () => {
    const ray_lst = rayGtoL([RY, RZ], [YZ, XZ])
    expect(ray_lst).toStrictEqual([
        [[0, 0, 0], [0, 0, 1]],
        [[0, 0, 0], [0, -1, 0]]
        ]);
}); 
