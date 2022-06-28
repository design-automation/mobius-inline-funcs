"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cos_1 = require("./cos");
const constants_1 = require("../constants");
test('Check cos', () => {
    expect((0, cos_1.cos)(0)).toStrictEqual(1);
});
test('Check cos overloaded', () => {
    expect((0, cos_1.cos)([1, constants_1.PI])).toStrictEqual([0.5403023058681398, -1]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3RyaWdvbm9tZXRyeS9jb3MudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw0Q0FBaUM7QUFFakMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDbkIsTUFBTSxDQUFDLElBQUEsU0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUM5QixNQUFNLENBQUMsSUFBQSxTQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyJ9