import { distance } from "./distance";
import { XY } from "../constants";
import { rayMake } from "../ray";
import { geometryClass } from "../geometry";
import { TRay } from "src/libs/common";

const ray1 = rayMake([0,0,0], [1,0,0])

test('Check distance with coords and coords', () => {
    expect(distance([0, 1, 0], [0, 2, 0])).toStrictEqual(1);
}); 

test('Check distance with coords and plane', () => {
    expect(distance([1,2,3], XY)).toStrictEqual(3);
}); 

test('Check distance with coords and ray', () => {
    expect(distance([0, 1, 0], ray1 as TRay)).toStrictEqual(1);
}); 

test('Check distance 1 arg error', () => {
    const geometry_class = new geometryClass(true);
    //@ts-ignore
    expect( () => {geometry_class.distance([1,2,3])} ).toThrow();
});