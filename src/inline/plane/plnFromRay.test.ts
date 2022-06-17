import { plnFromRay } from "./plnFromRay";
import { rayMake } from "../ray";

const ray1 = rayMake([0,0,0], [0, 0, 1])
const ray2 = rayMake([0, 0, 0], [1, 0, 0])
const ray3 = rayMake([0, 0, 0], [0, -1, 0])

test('Check plnFromRay', () => {
    const pln1 = plnFromRay(ray1)
    expect(pln1).toStrictEqual([
        [0, 0, 0],       
        [0, -1, 0],      
        [-1, 0, 0]     
        ]);
}); 

test('Check plnFromRay overloaded', () => {
    //@ts-ignore
    const pln_lst = plnFromRay([ray2, ray3])
    expect(pln_lst).toStrictEqual([
        [[0, 0, 0], [0, 1, 0], [0, 0, -1]],
        [[0, 0, 0], [1, 0, -0], [0, -0, -1]] 
        ]);
}); 

