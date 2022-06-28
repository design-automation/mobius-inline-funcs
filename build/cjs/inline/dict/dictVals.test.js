"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictVals_1 = require("./dictVals");
const index_1 = require("../../index");
const dict1 = { 'key1': 1, 'key2': 2 };
test('Check dictVals', () => {
    expect((0, dictVals_1.dictVals)(dict1)).toStrictEqual([1, 2]);
});
test('Check dictVals 2 arg error', () => {
    const dict_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { dict_class.dictVals(dict1, 2); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdFZhbHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0VmFscy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLHVDQUEwQztBQUUxQyxNQUFNLEtBQUssR0FBRyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFBO0FBRXBDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDeEIsTUFBTSxDQUFDLElBQUEsbUJBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsWUFBWTtJQUNaLE1BQU0sQ0FBRSxHQUFHLEVBQUUsR0FBRSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=