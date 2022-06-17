import { isPln } from "./isPln";
import { plnMake } from '../plane'

test('Check isPln T/F', () => {
    const pln1 = plnMake([0,0,0], [1,0,0], [0,1,0])
    expect(isPln(pln1)).toStrictEqual(true);
    expect(isPln(['no'])).toStrictEqual(false);
}); 