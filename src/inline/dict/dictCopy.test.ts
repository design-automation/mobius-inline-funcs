import { dictCopy } from './dictCopy';
import { dictClass } from '../dict';

test('Copy a dict', () => {
    expect(dictCopy({'key1': 1, 'key2': 2})).toStrictEqual({'key1': 1, 'key2': 2});
}); 

test('Copy a dict wrong number of args', () => {
    const dict_class = new dictClass(true);
    //@ts-ignore
    expect( () => {dict_class.dictCopy({'key1': 1, 'key2': 2}, 123)} ).toThrow();
});

test('Copy a dict and change value', () => {
    const dict1 = {'key1': 1, 'key2': 2};
    const dict2 = dictCopy(dict1);
    dict2['key1'] = 10;
    expect(dict1['key1']).toBe(1);
    expect(dict2['key1']).toBe(10);
});
