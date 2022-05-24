import { colFromStr } from "./colFromStr";
import { colorsClass } from "../colors"

test('Check ColsFromStr numbers', () => {
    expect(colFromStr('blue')).toStrictEqual([0, 0, 1]);
}); 

test('Check ColsFromStr wrong type', () => {
    const cols_class = new colorsClass(true);
    //@ts-ignore
    expect( () => {cols_class.colFromStr(123, 58)}).toThrow();
}); 