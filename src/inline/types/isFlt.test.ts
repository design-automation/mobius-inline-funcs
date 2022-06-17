import { isFlt } from "./isFlt";

test('Check isFlt T/F', () => {
    expect(isFlt(0.233545)).toStrictEqual(true);
    expect(isFlt(1)).toStrictEqual(false);
}); 