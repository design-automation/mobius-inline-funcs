import { rayCopy, InlineFuncs } from "../../index";
import { XY, RY, RX, RZ } from "../constants";

const ray1 = rayCopy(RX)
const ray_lst = rayCopy([RY, RZ])

test('Check rayCopy', () => {
    expect(ray1).toStrictEqual([
        [0, 0, 0],
        [1, 0, 0]
    ]);
}); 

test('Check rayCopy overloaded', () => {
    expect(ray_lst).toStrictEqual([RY, RZ]);
}); 

test('Check rayCopy wrong input type', () => {
    const ray_class = new InlineFuncs(true);
    //@ts-ignore
    expect( () => {rayClass.rayCopy(XY)}).toThrow();
}); 