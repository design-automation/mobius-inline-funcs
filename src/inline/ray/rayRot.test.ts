import { rayRot } from "./rayRot";
import { PI, RZ, RX, RY } from "../constants";

test('Check rayRot', () => {
    const ray1 = rayRot(RZ, RY, PI)
    expect(ray1[1][2]).toStrictEqual(-1);
}); 

test('Check rayRot overloaded', () => {
    const ray_lst = rayRot([RZ, RX], [RX, RY], [PI/2, PI])
    expect(ray_lst.length).toStrictEqual(2);
    expect(ray_lst[0][1][1]).toStrictEqual(-1);
    expect(ray_lst[1][1][0]).toStrictEqual(-1);
}); 