import { project } from "./project";
import { rayMake } from "../ray";
import { XY } from "../constants";
import { geometryClass } from "../geometry";
import { TRay } from "src/libs/common";

const ray1 = rayMake([1, 2, 0], [0, 1, 0])

test('Check project with coords, ray and no met', () => {
    expect(project([-1, 0, 0], ray1 as TRay)).toStrictEqual([1,0,0]);
}); 

test('Check project with coords and XY plane', () => {
    expect(project([-1, 0, 0], XY)).toStrictEqual([-1, 0, 0]);
}); 

test('Check project 1 arg error', () => {
    const geometry_class = new geometryClass(true);
    //@ts-ignore
    expect( () => {geometry_class.project([1,2,3])} ).toThrow();
});

//TODO add more test cases for mets 