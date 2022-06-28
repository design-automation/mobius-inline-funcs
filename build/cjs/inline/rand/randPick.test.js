"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randPick_1 = require("./randPick");
const index_1 = require("../../index");
const lst1 = ['a', 1, 2, 3, 'b', true];
//This is just testing that it has given something
//Not sure if jest can test for specific things within 
test('Check randPick no seed', () => {
    const check1a = (0, randPick_1.randPick)(lst1, 1);
    const check1b = (0, index_1.listHas)(lst1, check1a);
    expect(check1b).toStrictEqual(true);
});
test('Check randPick picking 2 integers with seed', () => {
    const check2 = (0, randPick_1.randPick)(lst1, 2, 3);
    expect(check2).toStrictEqual(["a", true]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZFBpY2sudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC9yYW5kUGljay50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLHVDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFFakMsa0RBQWtEO0FBQ2xELHVEQUF1RDtBQUN2RCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUEsbUJBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFPLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBRyxFQUFFO0lBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUEsbUJBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQyJ9