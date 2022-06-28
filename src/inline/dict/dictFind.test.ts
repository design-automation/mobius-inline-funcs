import { dictFind } from './dictFind';
import { InlineFuncs } from '../../index';

const dict1 = {'key1': 1, 'key2': 2}

test('Find "key2" from a dict', () => {
    expect(dictFind(dict1, 2)).toStrictEqual('key2');
}); 

test('Return null if cannot find value', () => {
    expect(dictFind(dict1, 3)).toBeNull();
}); 

test('Check for 3 arg error', () => {
    const dict_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {dict_class.dictFind(dict1, 'key2', [1,2])} ).toThrow();
}); 