import { norm } from "./norm";
import { InlineFuncs } from '../../index';

test('Check norm one integer', () => {
    expect(norm(-5)).toStrictEqual(5);
}); 

test('Check norm list of 3 nums with infinity arg', () => {
    expect(norm([1, 2, -3], Infinity)).toStrictEqual(3);
}); 

test('Check norm list of 3 nums with -inifinity arg', () => {
    expect(norm([1, 2, -3], -Infinity)).toStrictEqual(1);
}); 

test('Check norm 3 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.norm(123, 2, 1)}).toThrow();
});