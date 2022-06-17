import { rayLMove } from "./rayLMove";
import { rayMake } from "./rayMake";
import { XY, YZ, XZ, RX, RY, RZ } from "../constants";

test('Check rayLMove', () => {
    const ray1a = rayMake([1,2,3], [1,0,0])
    const ray1b = rayLMove(ray1a,3)
    expect(ray1b).toStrictEqual([
        [4, 2, 3],
        [1, 0, 0]
        ]);
}); 

test('Check rayLMove overloaded', () => {
    const ray_lst = rayLMove([RY, RZ], [1,2])
    expect(ray_lst).toStrictEqual([
        [[0, 1, 0], [0, 1, 0]],
        [[0, 0, 2], [0, 0, 1]]
        ]);
}); 

