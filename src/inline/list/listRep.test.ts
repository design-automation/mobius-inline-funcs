import { listRep } from './listRep';
import { InlineFuncs } from '../../index';

test('Repeat a list', () => {
    expect(listRep([1,2], 3)).toStrictEqual([1,2,1,2,1,2]);
}); 

test('listRep 1 arg error', () => {
    const list_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {list_class.listRep([1,2,3])} ).toThrow();
});

test('listRep non-integer error', () => {
    //@ts-ignore
    expect( () => {list_class.listRep([1], 3.3)} ).toThrow();
});