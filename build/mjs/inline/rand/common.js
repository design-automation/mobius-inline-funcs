// TODO is there a better random function than this?
export function _randWithSeed(s) {
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
export function _randShuffleWithSeed(arr, seed) {
    let ctr = arr.length;
    while (ctr > 0) {
        const r = (seed === undefined) ? Math.random() : _randWithSeed(ctr + seed);
        const index = Math.floor(r * ctr);
        ctr--;
        const temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9yYW5kL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFDcEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFTO0lBQ25DLGtHQUFrRztJQUNsRyw0QkFBNEI7SUFFNUIsa0VBQWtFO0lBQ2xFLCtGQUErRjtJQUMvRixvQkFBb0I7SUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLGdEQUFnRDtJQUNoRCxtQkFBbUI7QUFDdkIsQ0FBQztBQUNELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxHQUFVLEVBQUUsSUFBYTtJQUMxRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3JCLE9BQU8sR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNaLE1BQU0sQ0FBQyxHQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkYsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUMsR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIn0=