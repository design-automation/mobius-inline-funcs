"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const radToDeg_1 = require("./radToDeg");
const constants_1 = require("../constants");
test('Check radToDeg numbers', () => {
    expect((0, radToDeg_1.radToDeg)(constants_1.PI)).toStrictEqual(180);
});
test('Check radToDeg list', () => {
    expect((0, radToDeg_1.radToDeg)([constants_1.PI / 2, 0])).toStrictEqual([90, 0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkVG9EZWcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvY29udmVyc2lvbi9yYWRUb0RlZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLDRDQUFrQztBQUVsQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sQ0FBQyxJQUFBLG1CQUFRLEVBQUMsY0FBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxjQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQyJ9