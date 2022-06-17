import { rayMake } from "./rayMake";

test('Check rayMake', () => {
    const ray1 = rayMake([1,1,1], [1,0,0])
    expect(ray1).toStrictEqual([
        [1,1,1], [1,0,0]
    ]);

}); 

test('Check rayMake overloaded', () => {
    const ray_lst = rayMake([[0, 0, 0], [1, 0, 0]], [[0, 1, 0], [0, 0, 1]])
    expect(ray_lst).toStrictEqual([
        [[0, 0, 0], [0, 1, 0]],
        [[1, 0, 0], [0, 0, 1]]
    ]);

}); 
