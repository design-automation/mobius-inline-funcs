import { colFalse } from "./colFalse";
import { InlineFuncs } from '../../index';

test('Check ColFalse numbers', () => {
    expect(colFalse(3, 1, 10)).toStrictEqual([0, 0.8888888888888888, 1]);
}); 

test('Check ColFalse wrong args', () => {
    const cols_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {cols_class.colFalse(123, 58)}).toThrow();
}); 