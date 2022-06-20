import { distanceM } from "./distanceM";
import { XY } from "../constants";
import { TRay } from "src/libs/common";
import { InlineFuncs } from '../../index';

const inl = new InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([0,0,0], [1,0,0])

test('Check distanceM with coords and coords', () => {
    expect(distanceM([0, 1, 0], [0, 2, 0])).toStrictEqual(1);
}); 

test('Check distanceM with coords and plane', () => {
    expect(distanceM([1,0,2], XY)).toStrictEqual(2);
}); 

test('Check distanceM with coords and ray', () => {
    expect(distanceM([0, 1, 2], ray1 as TRay)).toStrictEqual(2.23606797749979);
}); 

test('Check distanceM 1 arg error', () => {
    //@ts-ignore
    expect( () => {inl.distanceM([1,2,3])} ).toThrow();
});