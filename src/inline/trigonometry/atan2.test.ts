import { atan2 } from "./atan2";
import { PI } from '../constants'

test('Check atan2', () => {
    expect(atan2([0, PI])).toStrictEqual(1.5707963267948966);
}); 

test('Check atan2 overloaded', () => {
    expect(atan2([[PI, PI / 4], [PI, PI / 2]])).toStrictEqual([0.24497866312686414, 0.4636476090008061]);
}); 