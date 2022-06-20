import { colFromStr } from "./colFromStr";
import { InlineFuncs } from '../../index';

test('Check ColsFromStr numbers', () => {
    expect(colFromStr('blue')).toStrictEqual([0, 0, 1]);
}); 

test('Check ColsFromStr wrong type', () => {
    const cols_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {cols_class.colFromStr(123, 58)}).toThrow();
}); 