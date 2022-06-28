import { pow } from './pow';

test('Check pow with decimal xp', () => {
    expect(pow(4, 0.5)).toStrictEqual(2);
}); 

test('Check pow with positive square result', () => {
    expect(pow(-7, 2)).toStrictEqual(49);
}); 

test('Check pow with negative cube result', () => {
    expect(pow(-7, 3)).toStrictEqual(-343);
}); 

test('Check pow of negative nums = NaN', () => {
    expect(pow(-7, 0.5)).toStrictEqual(NaN);
}); 
