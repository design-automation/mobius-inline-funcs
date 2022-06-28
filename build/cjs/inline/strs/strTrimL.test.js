"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strTrimL_1 = require("./strTrimL");
const str1 = '     test1';
const str2 = ' test2';
test('Check strTrimL', () => {
    expect((0, strTrimL_1.strTrimL)(str1)).toStrictEqual('test1');
});
test('Check strTrimL overloaded', () => {
    expect((0, strTrimL_1.strTrimL)([str1, str2])).toStrictEqual(['test1', 'test2']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbUwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJUcmltTC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBRXRDLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQTtBQUN6QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUE7QUFFckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUN4QixNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUMsQ0FBQyJ9