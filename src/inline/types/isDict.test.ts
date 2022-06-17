import { isDict } from "./isDict";

test('Check isDict T/F', () => {
    const dict1 = {'key1': 1}
    expect(isDict(dict1)).toStrictEqual(true);
    expect(isDict(1)).toStrictEqual(false);
}); 