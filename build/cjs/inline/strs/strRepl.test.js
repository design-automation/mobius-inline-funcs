"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strRepl_1 = require("./strRepl");
const str1 = 'Test';
const str2 = 'Test2';
test('Check strRepl', () => {
    expect((0, strRepl_1.strRepl)(str1, 'Test', 'New')).toStrictEqual('New');
});
test('Check strRepl overloaded', () => {
    expect((0, strRepl_1.strRepl)([str1, str2], 'Test', 'New')).toStrictEqual(['New', 'New2']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyUmVwbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clJlcGwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUVwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUE7QUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFBO0FBRXBCLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFBLGlCQUFPLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUU7SUFDbEMsTUFBTSxDQUFDLElBQUEsaUJBQU8sRUFBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMsQ0FBQyJ9