import { getArrDepth } from '../../libs/arrs';
import { xformMatrix, multMatrix } from '../../libs/matrix';
// ================================================================================================
export function _vecXForm(v, p, to_global) {
    // overloaded case
    const depth1 = getArrDepth(v);
    const depth2 = getArrDepth(p);
    if (depth1 === 1 && depth2 === 2) {
        // v is Txyz and p is TPlane
        return multMatrix(v, xformMatrix(p, to_global));
    }
    else if (depth1 === 2 && depth2 === 2) {
        // v is Txyz[] and p is TPlane
        const matrix = xformMatrix(p, to_global);
        return v.map(a_v => multMatrix(a_v, matrix));
    }
    else if (depth1 === 1 && depth2 === 3) {
        // v is Txyz and p is TPlane[]
        const result = [];
        for (const a_p of p) {
            const matrix = xformMatrix(a_p, to_global);
            result.push(multMatrix(v, matrix));
        }
        return result;
    }
    else if (depth1 === 2 && depth2 === 3) {
        // v is Txyz[] p is TPlane[], they must be equal length
        if (v.length === p.length) {
            const result = [];
            for (let i = 0; i < v.length; i++) {
                const matrix = xformMatrix(p[i], to_global);
                result.push(multMatrix(v[i], matrix));
            }
            return result;
        }
        else {
            throw new Error('Error transforming vectors: The list of vectors and list of planes must be of equal length.');
        }
    }
    throw new Error('Error transforming vectors: Cannot process the input lists.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVELG1HQUFtRztBQUNuRyxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQWMsRUFBRSxDQUFrQixFQUFFLFNBQWtCO0lBQzVFLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLDRCQUE0QjtRQUM1QixPQUFPLFVBQVUsQ0FBQyxDQUFTLEVBQUUsV0FBVyxDQUFDLENBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEMsOEJBQThCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkQsT0FBUSxDQUFZLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzdEO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsOEJBQThCO1FBQzlCLE1BQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7U0FBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQyx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO1lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUNYLDZGQUE2RixDQUFDLENBQUM7U0FDdEc7S0FDSjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQ1gsNkRBQTZELENBQUMsQ0FBQztBQUN2RSxDQUFDIn0=