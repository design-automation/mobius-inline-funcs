import { distance } from "./distance";
import { XY } from "../constants";
import { InlineFuncs } from '../../index';
import { TRay } from "src/libs/common";
const inl = new InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([0,0,0], [1,0,0])

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
    //@ts-ignore
    expect( () => {inl.distance([1,2,3])} ).toThrow();
});