"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vecAng_1 = require("./vecAng");
const constants_1 = require("../constants");
test('Check vecAng', () => {
    const vec1 = (0, vecAng_1.vecAng)(constants_1.VY, constants_1.VX);
    expect(vec1).toStrictEqual(constants_1.PI / 2);
});
test('Check vecAng overloaded', () => {
    const vec2 = (0, vecAng_1.vecAng)([constants_1.VY, constants_1.VX], [constants_1.VX, constants_1.VZ]);
    expect(vec2).toStrictEqual([constants_1.PI / 2, constants_1.PI / 2]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjQW5nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNBbmcudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUNsQyw0Q0FBOEM7QUFFOUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBQSxlQUFNLEVBQUMsY0FBRSxFQUFFLGNBQUUsQ0FBQyxDQUFBO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUNqQyxNQUFNLElBQUksR0FBRyxJQUFBLGVBQU0sRUFBQyxDQUFDLGNBQUUsRUFBRSxjQUFFLENBQUMsRUFBRSxDQUFDLGNBQUUsRUFBRSxjQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFFLEdBQUcsQ0FBQyxFQUFFLGNBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDIn0=