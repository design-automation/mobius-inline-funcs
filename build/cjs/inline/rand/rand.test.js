"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rand_1 = require("./rand");
test('Check rand no seed', () => {
    const check1 = (0, rand_1.rand)(0, 4);
    expect(check1).toBeGreaterThanOrEqual(0);
    expect(check1).toBeLessThan(4);
    expect(typeof check1).toBe('number');
});
test('Check rand with seed', () => {
    const check2 = (0, rand_1.rand)(0, 5, 3);
    expect(check2).toStrictEqual(1.0004029933611491);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9yYW5kL3JhbmQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE4QjtBQUU5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUEsV0FBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM5QixNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0lBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUEsV0FBSSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDIn0=