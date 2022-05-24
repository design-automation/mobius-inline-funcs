import { remap } from './remap';
import { arithmeticClass } from '../arithmetic';

test('Check remap', () => {
    expect(remap(3, [0,10], [100,200])).toStrictEqual(130);
}); 

test('Check remap 2 args error', () => {
    const math_class = new arithmeticClass(true);
    //@ts-ignore
    expect( () => {math_class.remap(123, [1,2,3],)}).toThrow();
});
