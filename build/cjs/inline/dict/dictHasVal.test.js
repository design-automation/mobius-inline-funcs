"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictHasVal_1 = require("./dictHasVal");
const index_1 = require("../../index");
const dict1 = { 'key1': 1, 'key2': 2 };
test('Check standard dictHasVal: True', () => {
    expect((0, dictHasVal_1.dictHasVal)(dict1, 2)).toStrictEqual(true);
});
test('Check standard dictHasVal: False', () => {
    expect((0, dictHasVal_1.dictHasVal)(dict1, 3)).toStrictEqual(false);
});
test('Check dictHasVal 1 arg error', () => {
    const dict_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { dict_class.dictHasVal(dict1); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEhhc1ZhbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9kaWN0L2RpY3RIYXNWYWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyx1Q0FBMEM7QUFFMUMsTUFBTSxLQUFLLEdBQUcsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQTtBQUVwQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQyxJQUFBLHVCQUFVLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtJQUMxQyxNQUFNLENBQUMsSUFBQSx1QkFBVSxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7SUFDdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLFlBQVk7SUFDWixNQUFNLENBQUUsR0FBRyxFQUFFLEdBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDIn0=