"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictHasKey_1 = require("./dictHasKey");
const index_1 = require("../../index");
const dict1 = { 'key1': 1, 'key2': 2 };
test('Check standard dictHasKey: True', () => {
    expect((0, dictHasKey_1.dictHasKey)(dict1, 'key1')).toStrictEqual(true);
});
test('Check standard dictHasKey: False', () => {
    expect((0, dictHasKey_1.dictHasKey)(dict1, 'key_none')).toStrictEqual(false);
});
test('Check dictHasKey 1 arg error', () => {
    const dict_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { dict_class.dictHasKey(dict1); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEhhc0tleS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9kaWN0L2RpY3RIYXNLZXkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyx1Q0FBMEM7QUFFMUMsTUFBTSxLQUFLLEdBQUcsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQTtBQUVwQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQyxJQUFBLHVCQUFVLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtJQUMxQyxNQUFNLENBQUMsSUFBQSx1QkFBVSxFQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7SUFDdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLFlBQVk7SUFDWixNQUFNLENBQUUsR0FBRyxFQUFFLEdBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDIn0=