import { vecAvgDir } from "./vecAvgDir";

test('Check vecAvgDir 3 args', () => {
    const vec1 = vecAvgDir([4, 0, 0], [1, 4, 0], [0, 0, 2])
    expect(vec1).toStrictEqual([0.6655842226184784, 0.5196724574955317, 0.5356661082445954]);
}); 

