import { rayFromTo } from "./rayFromTo";

test('Check rayFromTo', () => {
    const ray1 = rayFromTo([1, 2, 3], [0, 1, 5])
    expect(ray1).toStrictEqual([
        [1, 2, 3],
        [-1, -1, 2]
        ]);
}); 

test('Check rayFromTo overloaded', () => {
    const ray_lst = rayFromTo([[1, 0, 3], [0, 0, 0]], [[0, 1, 5], [0, 1, 1]])
    expect(ray_lst).toStrictEqual([
        [[1, 0, 3], [-1, 1, 2]],
        [[0, 0, 0], [0, 1, 1]]
        ]);
}); 
