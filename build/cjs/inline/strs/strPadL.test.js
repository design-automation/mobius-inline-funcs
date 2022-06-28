"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strPadL_1 = require("./strPadL");
const str1 = 'Test';
const str2 = 'Test2';
test('Check strPadL with fill', () => {
    expect((0, strPadL_1.strPadL)(str1, 7, '123')).toStrictEqual('123Test');
});
test('Check strPadL no fill and overloaded', () => {
    expect((0, strPadL_1.strPadL)([str1, str2], 8)).toStrictEqual(['    Test', '   Test2']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyUGFkTC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clBhZEwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUVwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUE7QUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFBO0FBRXBCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxDQUFDLElBQUEsaUJBQU8sRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsSUFBQSxpQkFBTyxFQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyxDQUFDLENBQUMifQ==