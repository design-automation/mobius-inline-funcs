"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atanh_1 = require("./atanh");
test('Check atanh NaN', () => {
    expect((0, atanh_1.atanh)(-2)).toStrictEqual(NaN);
});
test('Check atanh overloaded', () => {
    expect((0, atanh_1.atanh)([1, 0])).toStrictEqual([Infinity, 0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRhbmgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdHJpZ29ub21ldHJ5L2F0YW5oLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0M7QUFFaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUN6QixNQUFNLENBQUMsSUFBQSxhQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsTUFBTSxDQUFDLElBQUEsYUFBSyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMsQ0FBQyJ9