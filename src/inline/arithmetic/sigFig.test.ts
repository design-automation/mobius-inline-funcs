import { sigFig } from './sigFig';
import { arithmeticClass } from '../arithmetic';

test('Check sigFig number', () => {
    expect(sigFig([1, 1132, 38746823], 2)).toStrictEqual([1.0, 1100, 39000000]);
}); 

test('Check sigFig list', () => {
    expect(sigFig(23.52, 3)).toStrictEqual(23.5);
}); 

test('Check sigFig 1 arg', () => {
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.sigFig(123)}).toThrow();
}); 