import { dictKeys } from './dictKeys';
import { InlineFuncs } from '../../index';
const dict1 = { 'key1': 1, 'key2': 2 };
test('Check dictKeys', () => {
    expect(dictKeys(dict1)).toStrictEqual(['key1', 'key2']);
});
test('Check dictKeys 2 arg error', () => {
    const dict_class = new InlineFuncs(true);
    //@ts-ignore
    expect(() => { dict_class.dictKeys(dict1, 2); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEtleXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0S2V5cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxNQUFNLEtBQUssR0FBRyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFBO0FBRXBDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxZQUFZO0lBQ1osTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUMifQ==