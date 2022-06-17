/**
 * Needed for isCol
 * @param v1 
 * @param v2 
 * @param v3 
 */
export function _isWithin(v1: any, v2: any, v3: any): boolean {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
    v1 <= v2 && v2 <= v3;
}