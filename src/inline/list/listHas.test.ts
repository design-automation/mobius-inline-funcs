import { listHas } from './listHas';
import { listClass } from '../list';

test('Check standard listHas: True', () => {
    expect(listHas([1,2,3,4,5], 4)).toStrictEqual(true);
}); 

test('Check standard listHas: False', () => {
    expect(listHas([1,2,3,4,5], 8)).toStrictEqual(false);
}); 

test('Check listHas 1 arg error', () => {
    const list_class = new listClass(true);
    //@ts-ignore
    expect( () => {list_class.listHas([1,2,3])} ).toThrow();
});