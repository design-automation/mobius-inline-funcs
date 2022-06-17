import { rayMove } from "./rayMove";
import { rayMake } from "./rayMake";
import { XY, YZ, XZ, RX, RY, RZ } from "../constants";

test('Check rayMove', () => {
    const ray1a = rayMake([1,2,3], [1,0,0])
    const ray1b = rayMove(ray1a,[2,3,4])
    expect(ray1b).toStrictEqual([
        [3, 5, 7],
        [1, 0, 0]
        ]);
}); 

test('Check rayMove overloaded', () => {
    const ray_lst = rayMove([RY, RZ], [[1,1,1],[3,0,2]])
    expect(ray_lst).toStrictEqual([
        [[1, 1, 1], [0, 1, 0]],
        [[3, 0, 2], [0, 0, 1]]
        ]);
}); 

