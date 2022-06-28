"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acos_1 = require("./acos");
test('Check acos NaN', () => {
    expect((0, acos_1.acos)(-2)).toStrictEqual(NaN);
});
test('Check acos overloaded', () => {
    expect((0, acos_1.acos)([-1, 0])).toStrictEqual([3.141592653589793, 1.5707963267948966]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNvcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS90cmlnb25vbWV0cnkvYWNvcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBRTlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDeEIsTUFBTSxDQUFDLElBQUEsV0FBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxJQUFBLFdBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDakYsQ0FBQyxDQUFDLENBQUMifQ==