import { isList } from "./isList";

test('Check isList T/F', () => {
    expect(isList([1,2,3])).toStrictEqual(true);
    expect(isList(1)).toStrictEqual(false);
}); 