import { isApprox } from './isApprox';
import { InlineFuncs } from '../../index';

test('Check isApprox false', () => {
    expect(isApprox(8, 5, 1)).toStrictEqual(false);
}); 

test('Check isApprox true', () => {
    expect(isApprox(2, 3, 1.5)).toStrictEqual(true);
}); 

test('Check isApprox 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.isApprox(123, [1,2,3])}).toThrow();
});
