import { listCull } from './listCull';
import { listClass } from '../list';

test('Cull a list with 1 argument', () => {
    expect(listCull([1,2,3,0,4,0])).toStrictEqual([1,2,3,4]);
}); 

test('Cull a list with 2 arguments', () => {
    expect(listCull([1,2,3], [true, true, false])).toStrictEqual([1,2]);
}); 

test('Cull a list with 3 arguments error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listCull([1,2,3], [true], [true])} ).toThrow();
});

test('Cull a list with invalid argument 2 error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listCull([1,2,3], false)} ).toThrow();
}); 