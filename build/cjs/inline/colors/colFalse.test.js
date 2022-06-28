"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colFalse_1 = require("./colFalse");
const index_1 = require("../../index");
test('Check ColFalse numbers', () => {
    expect((0, colFalse_1.colFalse)(3, 1, 10)).toStrictEqual([0, 0.8888888888888888, 1]);
});
test('Check ColFalse wrong args', () => {
    const cols_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { cols_class.colFalse(123, 58); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sRmFsc2UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvY29sb3JzL2NvbEZhbHNlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFDdEMsdUNBQTBDO0FBRTFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsTUFBTSxDQUFDLElBQUEsbUJBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxZQUFZO0lBQ1osTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUQsQ0FBQyxDQUFDLENBQUMifQ==