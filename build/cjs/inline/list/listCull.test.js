"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listCull_1 = require("./listCull");
const index_1 = require("../../index");
test('Cull a list with 1 argument', () => {
    expect((0, listCull_1.listCull)([1, 2, 3, 0, 4, 0])).toStrictEqual([1, 2, 3, 4]);
});
test('Cull a list with 2 arguments', () => {
    expect((0, listCull_1.listCull)([1, 2, 3], [true, true, false])).toStrictEqual([1, 2]);
});
test('Cull a list with 3 arguments error', () => {
    const list_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { list_class.listCull([1, 2, 3], [true], [true]); }).toThrow();
});
test('Cull a list with invalid argument 2 error', () => {
    //@ts-ignore
    expect(() => { list_class.listCull([1, 2, 3], false); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEN1bGwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0Q3VsbC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLHVDQUEwQztBQUUxQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtJQUN0QyxNQUFNLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtJQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsWUFBWTtJQUNaLE1BQU0sQ0FBRSxHQUFHLEVBQUUsR0FBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtJQUNuRCxZQUFZO0lBQ1osTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEUsQ0FBQyxDQUFDLENBQUMifQ==