// TODO is there a better random function than this?
export function _randWithSeed(s: number): number {
    // const x = (Math.sin(s) + Math.sin(s * Math.E / 2) + Math.sin((s + 1) * (Math.PI / 3))) * 10000;
    // return x - Math.floor(x);

    // return (Math.sin(s / 2 + 1) + Math.cos(s + 2) * 5) * 10000 % 1;
    // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
    /* tslint:disable */
    var x = Math.sin(s++) * 10000;
    return x - Math.floor(x);
    //return (2**31-1&(s=Math.imul(48271,s)))/2**31;
    /* tslint:enable */
}
export function _randShuffleWithSeed(arr: any[], seed?: number) {
    let ctr = arr.length;
    while (ctr > 0) {
        const r: number = (seed === undefined) ? Math.random() : _randWithSeed(ctr + seed);
        const index: number = Math.floor(r * ctr);
        ctr--;
        const temp: number = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}