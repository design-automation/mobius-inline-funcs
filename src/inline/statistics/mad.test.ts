import { mad } from "./mad";

test('Check mad', () => {
    expect(mad([10, 20, 30])).toStrictEqual(10);
    expect(mad([1, 2, 3])).toStrictEqual(1);
}); 