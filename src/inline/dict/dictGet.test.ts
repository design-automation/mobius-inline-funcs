import { dictGet } from './dictGet';
import { InlineFuncs } from '../../index';

const dict1 = {'key1': 1, 'key2': 2, 'key3': {'subkey1': 11}}

test('Check dictGet with dict within a dict', () => {
    expect(dictGet(dictGet(dict1, 'key3'), 'subkey1')).toStrictEqual(11);
}); 

test('Check dictGet', () => {
    expect(dictGet(dict1, 'key1')).toStrictEqual(1);
}); 

test('Check dictGet with a dict of indexes', () => {
    expect(dictGet(dict1, ['key2', 'key1'])).toStrictEqual([2, 1]);
}); 

test('Check dictGet 3 args error', () => {
    const dict_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {dict_class.dictGet(dict1, 'key1', 'key2')} ).toThrow();
});