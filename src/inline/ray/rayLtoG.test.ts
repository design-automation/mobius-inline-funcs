import { rayLtoG } from "./rayLtoG";
import { XY, YZ, XZ, RX, RY, RZ } from "../constants";

test('Check rayLtoG', () => {
    const ray1 = rayLtoG(RX, XY)
    expect(ray1).toStrictEqual([
        [0, 0, 0],
        [1, 0, 0]
        ]);
}); 

test('Check rayLtoG overloaded', () => {
    const ray_lst = rayLtoG([RY, RZ], [YZ, XZ])
    expect(ray_lst).toStrictEqual([
        [[0, 0, 0], [1, 0, 0]],
        [[0, 0, 0], [0, 1, 0]]
        ]);
}); 
