"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._vecXForm = void 0;
const arrs_1 = require("../../libs/arrs");
const matrix_1 = require("../../libs/matrix");
// ================================================================================================
function _vecXForm(v, p, to_global) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(p);
    if (depth1 === 1 && depth2 === 2) {
        // v is Txyz and p is TPlane
        return (0, matrix_1.multMatrix)(v, (0, matrix_1.xformMatrix)(p, to_global));
    }
    else if (depth1 === 2 && depth2 === 2) {
        // v is Txyz[] and p is TPlane
        const matrix = (0, matrix_1.xformMatrix)(p, to_global);
        return v.map(a_v => (0, matrix_1.multMatrix)(a_v, matrix));
    }
    else if (depth1 === 1 && depth2 === 3) {
        // v is Txyz and p is TPlane[]
        const result = [];
        for (const a_p of p) {
            const matrix = (0, matrix_1.xformMatrix)(a_p, to_global);
            result.push((0, matrix_1.multMatrix)(v, matrix));
        }
        return result;
    }
    else if (depth1 === 2 && depth2 === 3) {
        // v is Txyz[] p is TPlane[], they must be equal length
        if (v.length === p.length) {
            const result = [];
            for (let i = 0; i < v.length; i++) {
                const matrix = (0, matrix_1.xformMatrix)(p[i], to_global);
                result.push((0, matrix_1.multMatrix)(v[i], matrix));
            }
            return result;
        }
        else {
            throw new Error('Error transforming vectors: The list of vectors and list of planes must be of equal length.');
        }
    }
    throw new Error('Error transforming vectors: Cannot process the input lists.');
}
exports._vecXForm = _vecXForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUE4QztBQUM5Qyw4Q0FBNEQ7QUFFNUQsbUdBQW1HO0FBQ25HLFNBQWdCLFNBQVMsQ0FBQyxDQUFjLEVBQUUsQ0FBa0IsRUFBRSxTQUFrQjtJQUM1RSxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsSUFBQSxrQkFBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5Qiw0QkFBNEI7UUFDNUIsT0FBTyxJQUFBLG1CQUFVLEVBQUMsQ0FBUyxFQUFFLElBQUEsb0JBQVcsRUFBQyxDQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUNyRTtTQUFNLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BDLDhCQUE4QjtRQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFBLG9CQUFXLEVBQUMsQ0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELE9BQVEsQ0FBWSxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUEsbUJBQVUsRUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUM3RDtTQUFNLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLDhCQUE4QjtRQUM5QixNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBQSxvQkFBVyxFQUFDLEdBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUEsbUJBQVUsRUFBQyxDQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE1BQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBQSxvQkFBVyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFBLG1CQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FDWCw2RkFBNkYsQ0FBQyxDQUFDO1NBQ3RHO0tBQ0o7SUFDRCxNQUFNLElBQUksS0FBSyxDQUNYLDZEQUE2RCxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQW5DRCw4QkFtQ0MifQ==