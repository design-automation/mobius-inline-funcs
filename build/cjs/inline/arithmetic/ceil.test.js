"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ceil_1 = require("./ceil");
test('Check ceil of positive number', () => {
    expect((0, ceil_1.ceil)(0.95)).toStrictEqual(1);
});
test('Check ceil of positive integer', () => {
    expect((0, ceil_1.ceil)(4)).toStrictEqual(4);
});
test('Check ceil of negative number', () => {
    expect((0, ceil_1.ceil)(-7.004)).toStrictEqual(-7);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VpbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL2NlaWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE4QjtBQUU5QixJQUFJLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFBLFdBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLEVBQUU7SUFDeEMsTUFBTSxDQUFDLElBQUEsV0FBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLCtCQUErQixFQUFFLEdBQUcsRUFBRTtJQUN2QyxNQUFNLENBQUMsSUFBQSxXQUFJLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=