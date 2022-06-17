import { mode } from "./mode";

test('Check mode', () => {
    expect(mode([2, 1, 4, 3, 1])).toStrictEqual([1]);
}); 

test('Check mode with strings', () => {
    expect(mode([1, 1.5, 'abc'])).toStrictEqual([1, 1.5, 'abc']);
}); 
