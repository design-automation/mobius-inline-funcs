import { vari } from "./vari";

test('Check vari', () => {
    expect(vari([2, 4, 6])).toStrictEqual(4);
    expect(vari([2, 4, 6, 8])).toStrictEqual(6.666666666666667);
}); 