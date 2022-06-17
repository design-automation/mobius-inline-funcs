import { sin } from "./sin";
import { PI } from '../constants'

test('Check sin', () => {
    expect(sin(0)).toStrictEqual(0);
}); 

test('Check sin overloaded', () => {
    expect(sin([PI/2, (3 * PI) / 2])).toStrictEqual([1, -1]);
}); 