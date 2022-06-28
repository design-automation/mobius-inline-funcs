import { remap } from './remap';
import { InlineFuncs } from '../../index';

test('Check remap', () => {
    expect(remap(3, [0,10], [100,200])).toStrictEqual(130);
}); 

test('Check remap 2 args error', () => {
    const math_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {math_class.remap(123, [1,2,3],)}).toThrow();
});
