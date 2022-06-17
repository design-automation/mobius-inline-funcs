import { sinh } from "./sinh";

test('Check sinh', () => {
    expect(sinh(0)).toStrictEqual(0);
}); 

test('Check sinh overloaded', () => {
    expect(sinh([1, 2])).toStrictEqual([1.1752011936438014, 3.626860407847019]);
}); 