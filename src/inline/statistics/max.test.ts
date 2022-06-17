import { max } from "./max";

test('Check max', () => {
    expect(max([10, 20, 30])).toStrictEqual(30);
    expect(max([1, 3, 2])).toStrictEqual(3);
}); 