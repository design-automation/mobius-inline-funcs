import { distanceMS } from "./distanceMS";
import { XY } from "../constants";
import { TRay } from "src/libs/common";
import { InlineFuncs } from '../../index';

const inl = new InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([0,0,0], [1,0,0])

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
    //@ts-ignore
    expect( () => {inl.distanceMS([1,2,3])} ).toThrow();
});