import { dictHasVal } from './dictHasVal';
import { dictClass } from '../dict';

const dict1 = {'key1': 1, 'key2': 2}

test('Check standard dictHasVal: True', () => {
    expect(dictHasVal(dict1, 2)).toStrictEqual(true);
}); 

test('Check standard dictHasVal: False', () => {
    expect(dictHasVal(dict1, 3)).toStrictEqual(false);
}); 

test('Check dictHasVal 1 arg error', () => {
    const dict_class = new dictClass(true);
    //@ts-ignore
    expect( () => {dict_class.dictHasVal(dict1)} ).toThrow();
});