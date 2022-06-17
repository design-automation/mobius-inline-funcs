import { median } from "./median";

test('Check median', () => {
    expect(median([5, 2, 7])).toStrictEqual(5);
    expect(median([3, -1, 5, 7])).toStrictEqual(4);
}); 