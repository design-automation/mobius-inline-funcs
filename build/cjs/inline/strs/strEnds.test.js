"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strEnds_1 = require("./strEnds");
const str1 = 'testing123';
const str2 = 'no';
test('Check strEnds true', () => {
    expect((0, strEnds_1.strEnds)(str1, '123')).toStrictEqual(true);
});
test('Check strEnds overloaded true and false', () => {
    expect((0, strEnds_1.strEnds)([str1, str2], '123')).toStrictEqual([true, false]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyRW5kcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0ckVuZHMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUVwQyxNQUFNLElBQUksR0FBRyxZQUFZLENBQUE7QUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBRWpCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDNUIsTUFBTSxDQUFDLElBQUEsaUJBQU8sRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMseUNBQXlDLEVBQUUsR0FBRyxFQUFFO0lBQ2pELE1BQU0sQ0FBQyxJQUFBLGlCQUFPLEVBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQyJ9