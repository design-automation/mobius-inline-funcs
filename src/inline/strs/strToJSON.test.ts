import { strToJSON } from "./strToJSON";

test('Check strToJSON true', () => {
    expect(strToJSON("{\"name\":\"John\",\"age\":\"30\"}")).toEqual(
        {"age": "30", "name": "John"}
        );
}); 

