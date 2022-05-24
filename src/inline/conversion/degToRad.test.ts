import { degToRad } from './degToRad';
import { conversionClass } from '../conversion'

test('Check degToRad numbers', () => {
    expect(degToRad(180)).toStrictEqual(3.141592653589793);
}); 

test('Check degToRad list', () => {
    expect(degToRad([45, 90])).toStrictEqual([0.7853981633974483, 1.5707963267948966]);
}); 