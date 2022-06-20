import { cube } from "./cube";
import { InlineFuncs } from '../../index';

test('Check cube of positive number', () => {
    expect(cube(5)).toStrictEqual(125);
}); 

test('Check cube of negative number', () => {
    expect(cube(-2)).toStrictEqual(-8);
}); 

test('Check cube of list', () => {
    expect(cube([1, 2, 3, 4])).toStrictEqual([1, 8, 27, 64]);
}); 

test('Check cube 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.cube(123, [1,2,3],)}).toThrow();
});
