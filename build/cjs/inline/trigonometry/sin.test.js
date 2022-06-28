"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sin_1 = require("./sin");
const constants_1 = require("../constants");
test('Check sin', () => {
    expect((0, sin_1.sin)(0)).toStrictEqual(0);
});
test('Check sin overloaded', () => {
    expect((0, sin_1.sin)([constants_1.PI / 2, (3 * constants_1.PI) / 2])).toStrictEqual([1, -1]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3RyaWdvbm9tZXRyeS9zaW4udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw0Q0FBaUM7QUFFakMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDbkIsTUFBTSxDQUFDLElBQUEsU0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUM5QixNQUFNLENBQUMsSUFBQSxTQUFHLEVBQUMsQ0FBQyxjQUFFLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLGNBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDIn0=