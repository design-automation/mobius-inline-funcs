import { dictHasKey } from './dictHasKey';
import { dictClass } from '../dict';

const dict1 = {'key1': 1, 'key2': 2}

test('Check standard dictHasKey: True', () => {
    expect(dictHasKey(dict1, 'key1')).toStrictEqual(true);
}); 

test('Check standard dictHasKey: False', () => {
    expect(dictHasKey(dict1, 'key_none')).toStrictEqual(false);
}); 

test('Check dictHasKey 1 arg error', () => {
    const dict_class = new dictClass(true);
    //@ts-ignore
    expect( () => {dict_class.dictHasKey(dict1)} ).toThrow();
});