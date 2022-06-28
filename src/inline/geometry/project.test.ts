import { project } from "./project";
import { XY } from "../constants";
import { TRay } from "src/libs/common";
import { InlineFuncs } from '../../index';

const inl = new InlineFuncs(true);
//@ts-ignore
const ray1 = inl.rayMake([1,2,0], [0,1,0])

test('Check project with coords, ray and no met', () => {
    expect(project([-1, 0, 0], ray1 as TRay)).toStrictEqual([1,0,0]);
}); 

test('Check project with coords and XY plane', () => {
    expect(project([-1, 0, 0], XY)).toStrictEqual([-1, 0, 0]);
}); 

test('Check project 1 arg error', () => {
    //@ts-ignore
    expect( () => {inl.project([1,2,3])} ).toThrow();
});

//TODO add more test cases for mets 