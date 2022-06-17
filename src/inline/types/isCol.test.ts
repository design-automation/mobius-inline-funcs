import { isCol } from "./isCol";

test('Check isCol T/F', () => {
    expect(isCol([1,0.5,0])).toStrictEqual(true);
    expect(isCol(1)).toStrictEqual(false);
}); 