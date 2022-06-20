import { dictVals } from './dictVals';
import { InlineFuncs } from '../../index';

const dict1 = {'key1': 1, 'key2': 2}

test('Check dictVals', () => {
    expect(dictVals(dict1)).toStrictEqual([1, 2]);
}); 

test('Check dictVals 2 arg error', () => {
    const dict_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {dict_class.dictVals(dict1, 2)} ).toThrow();
});