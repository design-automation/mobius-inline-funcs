import { dictEq } from './dictEq';
import { InlineFuncs } from '../../index';

const dict1 = {'key1': 1, 'key2': 2}
const dict2 = {'key1': 1, 'key2': 2}
const dict3 = {'key3': 3, 'key2': 2}


test('Check if two dicts are equal: False', () => {
    //@ts-ignore
    expect(dictEq(dict1, dict3)).toStrictEqual(false);
}); 

test('Check if two dicts are equal: True', () => {
    //@ts-ignore
    expect(dictEq(dict1, dict2)).toStrictEqual(true);
}); 

test('Check 1 argument error', () => {
    const dict_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {dict_class.dictEq(dict3)} ).toThrow();
}); 