import { number } from './number';

test('Check number from string', () => {
    expect(number('102')).toStrictEqual(102);
}); 

