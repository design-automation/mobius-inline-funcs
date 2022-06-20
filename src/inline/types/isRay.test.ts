import { isRay } from "./isRay";
import { rayMake } from '../../index'

test('Check isRay T/F', () => {
    const Ray1 = rayMake([0,0,0], [1,0,0])
    expect(isRay(Ray1)).toStrictEqual(true);
    expect(isRay(['no'])).toStrictEqual(false);
}); 