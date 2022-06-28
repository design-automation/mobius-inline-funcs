import { vecRot } from "./vecRot";
import { VY, VX, VZ, PI } from "../constants";
test('Check vecRot', () => {
    const vec1 = vecRot([1, -2, 3], VZ, PI);
    expect(vec1).toStrictEqual([-0.9999999999999998, 2, 3]);
});
test('Check vecRot v1 and ang overloaded', () => {
    const vec2 = vecRot([VX, [-1, -2, 3]], VZ, [PI / 2, PI]);
    expect(vec2).toStrictEqual([
        [2.220446049250313e-16, 1, 0],
        [1.0000000000000004, 2, 3]
    ]);
});
test('Check vecRot v2 overloaded', () => {
    const vec3 = vecRot(VX, [VY, VZ], PI);
    expect(vec3).toStrictEqual([
        [-1, 0, -1.2246467991473532e-16],
        [-1, 1.2246467991473532e-16, 0]
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjUm90LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNSb3QudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7SUFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN2QixDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztLQUM5QixDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQyJ9