import { radToDeg } from './radToDeg';
import { PI } from '../constants';

test('Check radToDeg numbers', () => {
    expect(radToDeg(PI)).toStrictEqual(180);
}); 

test('Check radToDeg list', () => {
    expect(radToDeg([PI / 2, 0])).toStrictEqual([90, 0]);
}); 