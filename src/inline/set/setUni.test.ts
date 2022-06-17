import { setUni } from "./setUni";

test('Check setUni', () => {
    expect(setUni([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([1, 2, 5, 6, 3, 4]
    );
}); 