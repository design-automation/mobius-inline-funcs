import { dictKeys } from './dictKeys';
import { dictClass } from '../dict';

const dict1 = {'key1': 1, 'key2': 2}

test('Check dictKeys', () => {
    expect(dictKeys(dict1)).toStrictEqual(['key1', 'key2']);
}); 

test('Check dictKeys 2 arg error', () => {
    const dict_class = new dictClass(true);
    //@ts-ignore
    expect( () => {dict_class.dictKeys(dict1, 2)} ).toThrow();
});