import { asinh } from "./asinh";

test('Check asinh negative', () => {
    expect(asinh(-1)).toStrictEqual(-0.881373587019543);
}); 

test('Check asinh overloaded', () => {
    expect(asinh([1, 0])).toStrictEqual([0.881373587019543, 0]);
}); 