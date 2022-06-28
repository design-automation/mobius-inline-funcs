"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictKeys_1 = require("./dictKeys");
const index_1 = require("../../index");
const dict1 = { 'key1': 1, 'key2': 2 };
test('Check dictKeys', () => {
    expect((0, dictKeys_1.dictKeys)(dict1)).toStrictEqual(['key1', 'key2']);
});
test('Check dictKeys 2 arg error', () => {
    const dict_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { dict_class.dictKeys(dict1, 2); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEtleXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0S2V5cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLHVDQUEwQztBQUUxQyxNQUFNLEtBQUssR0FBRyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFBO0FBRXBDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDeEIsTUFBTSxDQUFDLElBQUEsbUJBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsWUFBWTtJQUNaLE1BQU0sQ0FBRSxHQUFHLEVBQUUsR0FBRSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=