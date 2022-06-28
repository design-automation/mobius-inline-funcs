"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strTrim_1 = require("./strTrim");
const str1 = "This\ is a \sentence";
const str2 = "   This used to have whitespace   ";
test('Check strTrim line terminator', () => {
    expect((0, strTrim_1.strTrim)(str1)).toStrictEqual("This is a sentence");
});
test('Check strTrim overloaded and white space', () => {
    expect((0, strTrim_1.strTrim)([str1, str2])).toStrictEqual(["This is a sentence", "This used to have whitespace"]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clRyaW0udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUVwQyxNQUFNLElBQUksR0FBRyxzQkFBc0IsQ0FBQTtBQUNuQyxNQUFNLElBQUksR0FBRyxvQ0FBb0MsQ0FBQTtBQUVqRCxJQUFJLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFBLGlCQUFPLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFHLEVBQUU7SUFDbEQsTUFBTSxDQUFDLElBQUEsaUJBQU8sRUFBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0FBQ3hHLENBQUMsQ0FBQyxDQUFDIn0=