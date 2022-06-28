"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rayFromTo_1 = require("./rayFromTo");
test('Check rayFromTo', () => {
    const ray1 = (0, rayFromTo_1.rayFromTo)([1, 2, 3], [0, 1, 5]);
    expect(ray1).toStrictEqual([
        [1, 2, 3],
        [-1, -1, 2]
    ]);
});
test('Check rayFromTo overloaded', () => {
    const ray_lst = (0, rayFromTo_1.rayFromTo)([[1, 0, 3], [0, 0, 0]], [[0, 1, 5], [0, 1, 1]]);
    expect(ray_lst).toStrictEqual([
        [[1, 0, 3], [-1, 1, 2]],
        [[0, 0, 0], [0, 1, 1]]
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5RnJvbVRvLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3JheS9yYXlGcm9tVG8udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUV4QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLE1BQU0sSUFBSSxHQUFHLElBQUEscUJBQVMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDVixDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLEVBQUU7SUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBQSxxQkFBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckIsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMifQ==