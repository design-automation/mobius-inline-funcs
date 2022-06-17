import { distanceMS } from "./distanceMS";
import { XY } from "../constants";
import { rayMake } from "../ray";
import { geometryClass } from "../geometry";
import { TRay } from "src/libs/common";

const ray1 = rayMake([0,0,0], [1,0,0])

test('Check distanceMS with coords and coords', () => {
    expect(distanceMS([0, 1, 0], [0, 2, 0])).toStrictEqual(1);
}); 

test('Check distanceMS with coords and plane', () => {
    expect(distanceMS([1,0,2], XY)).toStrictEqual(2);
}); 

test('Check distanceMS with coords and ray', () => {
    expect(distanceMS([0, 1, 2], ray1 as TRay)).toStrictEqual(2.23606797749979);
}); 

test('Check distanceMS 1 arg error', () => {
    const geometry_class = new geometryClass(true);
    //@ts-ignore
    expect( () => {geometry_class.distanceMS([1,2,3])} ).toThrow();
});