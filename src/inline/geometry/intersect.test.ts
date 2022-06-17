import { intersect } from "./intersect";
import { rayMake } from "../ray";
import { XY } from "../constants";
import { geometryClass } from "../geometry";
import { TRay } from "src/libs/common";

const ray1 = rayMake([5,0,0], [-1,0,0])
const ray2 = rayMake([0,-2,0], [0,1,0])
const ray3 = rayMake([0,2,0], [0,1,0])

test('Check intersect with 2 rays and no met', () => {
    expect(intersect(ray1 as TRay, ray2 as TRay)).toStrictEqual([0,0,0]);
}); 

test('Check intersect with 2 rays and m=1', () => {
    expect(intersect(ray1 as TRay, ray3 as TRay, 1)).toStrictEqual(null);
}); 

//TODO add more test cases for mets and planes 