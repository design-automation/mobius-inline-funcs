import { tan } from "./tan";
import { PI } from '../constants'

test('Check tan', () => {
    expect(tan(0)).toStrictEqual(0);
}); 

test('Check tan overloaded', () => {
    expect(tan([PI / 3, PI / 6])).toStrictEqual([1.7320508075688767, 0.5773502691896257]);
}); 