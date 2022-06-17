import { min } from "./min";

test('Check min', () => {
    expect(min([10, 20, 30])).toStrictEqual(10);
    expect(min([5,3,6,2,4])).toStrictEqual(2);
}); 