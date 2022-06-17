import { mean } from "./mean";

test('Check mean', () => {
    expect(mean([1, 2.7, 3.2, 4])).toStrictEqual(2.725);
    expect(mean([1, 3, 2])).toStrictEqual(2);
}); 