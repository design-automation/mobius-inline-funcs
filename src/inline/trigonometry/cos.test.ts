import { cos } from "./cos";
import { PI } from '../constants'

test('Check cos', () => {
    expect(cos(0)).toStrictEqual(1);
}); 

test('Check cos overloaded', () => {
    expect(cos([1, PI])).toStrictEqual([0.5403023058681398, -1]);
}); 