"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colFromStr_1 = require("./colFromStr");
const index_1 = require("../../index");
test('Check ColsFromStr numbers', () => {
    expect((0, colFromStr_1.colFromStr)('blue')).toStrictEqual([0, 0, 1]);
});
test('Check ColsFromStr wrong type', () => {
    const cols_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { cols_class.colFromStr(123, 58); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sRnJvbVN0ci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9jb2xvcnMvY29sRnJvbVN0ci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTBDO0FBQzFDLHVDQUEwQztBQUUxQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLE1BQU0sQ0FBQyxJQUFBLHVCQUFVLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxZQUFZO0lBQ1osTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUMifQ==