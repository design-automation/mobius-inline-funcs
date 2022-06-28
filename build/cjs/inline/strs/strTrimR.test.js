"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strTrimR_1 = require("./strTrimR");
const str1 = 'test1     ';
const str2 = 'test2 ';
test('Check strTrimR', () => {
    expect((0, strTrimR_1.strTrimR)(str1)).toStrictEqual('test1');
});
test('Check strTrimR overloaded', () => {
    expect((0, strTrimR_1.strTrimR)([str1, str2])).toStrictEqual(['test1', 'test2']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbVIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJUcmltUi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBRXRDLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQTtBQUN6QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUE7QUFFckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUN4QixNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUMsQ0FBQyJ9