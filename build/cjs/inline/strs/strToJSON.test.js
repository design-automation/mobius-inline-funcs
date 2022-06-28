"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strToJSON_1 = require("./strToJSON");
test('Check strToJSON true', () => {
    expect((0, strToJSON_1.strToJSON)("{\"name\":\"John\",\"age\":\"30\"}")).toEqual({ "age": "30", "name": "John" });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVG9KU09OLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3N0cnMvc3RyVG9KU09OLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0M7QUFFeEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUM5QixNQUFNLENBQUMsSUFBQSxxQkFBUyxFQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQzNELEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQzVCLENBQUM7QUFDVixDQUFDLENBQUMsQ0FBQyJ9