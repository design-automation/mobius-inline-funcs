import { std } from "./std";

test('Check std', () => {
    expect(std([2, 4, 6])).toStrictEqual(2);
    expect(std([2, 4, 6, 8])).toStrictEqual(2.581988897471611);
}); 