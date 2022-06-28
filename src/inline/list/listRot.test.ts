import { listRot } from './listRot';
import { InlineFuncs } from '../../index';

test('Rotate a list positively', () => {
    expect(listRot([1,2,3,4], 2)).toStrictEqual([3,4,1,2]);
}); 

test('Rotate a list negatively', () => {
    expect(listRot([1,2,3,4], -5)).toStrictEqual([2,3,4,1]);
}); 

test('Check listRot 3 args error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listRot([1,2,3,4], -5, 6)} ).toThrow();
}); 