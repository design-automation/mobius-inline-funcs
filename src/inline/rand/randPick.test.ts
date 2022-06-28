import { randPick } from "./randPick";
import { listHas } from "../../index";

const lst1 = ['a',1,2,3,'b',true]

//This is just testing that it has given something
//Not sure if jest can test for specific things within 
test('Check randPick no seed', () => {
    const check1a = randPick(lst1, 1);
    const check1b = listHas(lst1, check1a)
    expect(check1b).toStrictEqual(true)
}); 

test('Check randPick picking 2 integers with seed', () => {
    const check2 = randPick(lst1, 2, 3);
    expect(check2).toStrictEqual(["a", true]);
}); 