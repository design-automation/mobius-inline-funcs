import { colFalse } from "./colFalse";
import { colorsClass } from "../colors"

test('Check ColFalse numbers', () => {
    expect(colFalse(3, 1, 10)).toStrictEqual([0, 0.8888888888888888, 1]);
}); 

test('Check ColFalse wrong args', () => {
    const cols_class = new colorsClass(true);
    //@ts-ignore
    expect( () => {cols_class.colFalse(123, 58)}).toThrow();
}); 