import { colScale } from "./colScale";
import { InlineFuncs } from '../../index';

test('Check ColScale numbers', () => {
    expect(colScale(4, 1, 10, 'BuPu')).toStrictEqual([0.6627450980392157, 0.7673202614379084, 0.8705882352941177]);
}); 

test('Check ColScale wrong args', () => {
    const cols_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {cols_class.colScale(123, 58)}).toThrow();
}); 