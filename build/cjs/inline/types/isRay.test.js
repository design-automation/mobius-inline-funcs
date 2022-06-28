"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isRay_1 = require("./isRay");
const index_1 = require("../../index");
test('Check isRay T/F', () => {
    const Ray1 = (0, index_1.rayMake)([0, 0, 0], [1, 0, 0]);
    expect((0, isRay_1.isRay)(Ray1)).toStrictEqual(true);
    expect((0, isRay_1.isRay)(['no'])).toStrictEqual(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNSYXkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdHlwZXMvaXNSYXkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFnQztBQUNoQyx1Q0FBcUM7QUFFckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxJQUFBLGVBQU8sRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEMsTUFBTSxDQUFDLElBQUEsYUFBSyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxJQUFBLGFBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUMifQ==