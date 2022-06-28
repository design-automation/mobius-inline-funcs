"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const distance_1 = require("./distance");
const constants_1 = require("../constants");
const index_1 = require("../../index");
const inl = new index_1.InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([0, 0, 0], [1, 0, 0]);
test('Check distance with coords and coords', () => {
    expect((0, distance_1.distance)([0, 1, 0], [0, 2, 0])).toStrictEqual(1);
});
test('Check distance with coords and plane', () => {
    expect((0, distance_1.distance)([1, 2, 3], constants_1.XY)).toStrictEqual(3);
});
test('Check distance with coords and ray', () => {
    expect((0, distance_1.distance)([0, 1, 0], ray1)).toStrictEqual(1);
});
test('Check distance 1 arg error', () => {
    //@ts-ignore
    expect(() => { inl.distance([1, 2, 3]); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZ2VvbWV0cnkvZGlzdGFuY2UudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFzQztBQUN0Qyw0Q0FBa0M7QUFDbEMsdUNBQTBDO0FBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxZQUFZO0FBQ1osTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFMUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsRUFBRTtJQUMvQyxNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLElBQUEsbUJBQVEsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFO0lBQzVDLE1BQU0sQ0FBQyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxZQUFZO0lBQ1osTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQyJ9