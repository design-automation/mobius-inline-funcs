import { rayFromPln } from "./rayFromPln";
import { XY, YZ, XZ } from "../constants";

test('Check rayFromPln', () => {
    const ray1 = rayFromPln(XY)
    expect(ray1).toStrictEqual([
        [0, 0, 0],
        [0, 0, 1] 
        ]);
}); 

test('Check rayFromPln overloaded', () => {
    const ray_lst = rayFromPln([YZ, XZ])
    expect(ray_lst).toStrictEqual([
        [[0, 0, 0], [1, 0, 0]],
        [[0, 0, 0], [0, -1, 0]]
        ]);
}); 
