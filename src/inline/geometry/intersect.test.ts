import { intersect } from "./intersect";
import { TRay } from "src/libs/common";
import { InlineFuncs } from '../../index';

const inl = new InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([5,0,0], [-1,0,0])
//@ts-ignore
const ray2 = inl.rayMake([0,-2,0], [0,1,0])
//@ts-ignore
const ray3 = inl.rayMake([0,2,0], [0,1,0])

test('Check intersect with 2 rays and no met', () => {
    expect(intersect(ray1 as TRay, ray2 as TRay)).toStrictEqual([0,0,0]);
}); 

test('Check intersect with 2 rays and m=1', () => {
    expect(intersect(ray1 as TRay, ray3 as TRay, 1)).toStrictEqual(null);
}); 

//TODO add more test cases for mets and planes 