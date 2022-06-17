import { tanh } from "./tanh";

test('Check tanh infinity', () => {
    expect(tanh(Infinity)).toStrictEqual(1);
}); 

test('Check tanh overloaded', () => {
    expect(tanh([0, 1])).toStrictEqual([0, 0.7615941559557649]);
}); 