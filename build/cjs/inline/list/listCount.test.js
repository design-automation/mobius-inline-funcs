"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listCount_1 = require("./listCount");
const index_1 = require("../../index");
test('Count a number in alist', () => {
    expect((0, listCount_1.listCount)([1, 2, 3, 3, 3, 3], 3)).toStrictEqual(4);
});
// test('Count lists in a list', () => {
//     expect(listCount([[1], 2, [1], [1], 3, 4, [1], [1]], [1])).toStrictEqual(5);
// }); 
// ^ currently legitimately fails 
test('More than 2 arguments error', () => {
    const list_class = new index_1.InlineFuncs(true);
    //@ts-ignore
    expect(() => { list_class.listCount([1, 2, 3], 1, 0); }).toThrow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvdW50LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdENvdW50LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0M7QUFDeEMsdUNBQTBDO0FBRTFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxDQUFDLElBQUEscUJBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUM7QUFFSCx3Q0FBd0M7QUFDeEMsbUZBQW1GO0FBQ25GLE9BQU87QUFDUCxrQ0FBa0M7QUFFbEMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUNyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsWUFBWTtJQUNaLE1BQU0sQ0FBRSxHQUFHLEVBQUUsR0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNwRSxDQUFDLENBQUMsQ0FBQyJ9