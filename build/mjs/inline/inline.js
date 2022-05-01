const inline_query_expr = [
    ['#XX', 'The `#XX` expression  is used to get a list of connected entities. \n\nThe `XX` is a two letter code that specifies the type of entity that is required. They are as folows:\n* `ps`: positions\n* `_v`: vertices (topology)\n* `_e`: edges (topology)\n* `_w`: wires (topology)\n* `pt`: points (objects)\n* `pl`: polylines (objects)\n* `pg`: polygons (objects)\n* `co`: collections (groups of objects)\n\nThe expression will return a list of entities of the given type. For example:\n\n* `#ps` gets all the positions in the model\n* `1#pg` gets all the polygons in the model.\n'],
    ['entity#XX', 'The `entity#XX` expression is used to get a list of connected entities. \n\nThe `XX` is a two letter code that specifies the type of entity that is required. They are as folows:\n* `ps`: positions\n* `_v`: vertices (topology)\n* `_e`: edges (topology)\n* `_w`: wires (topology)\n* `pt`: points (objects)\n* `pl`: polylines (objects)\n* `pg`: polygons (objects)\n* `co`: collections (groups of objects)\n\nThe expression will return a list of entities of the given type.\n\nExamples going down the entity hierarchy:\n\n* `pline1#ps` gets all the positions for the polyline that is stored in the variable `pline1`.\n* `pgon1#_e` gets the edges from the polygon that is stored in the variable `pgon1`.\n\nExamples going up the entity hierarchy:\n\n* `posi1#pl` gets all the polylines that include the position that is stored in the variable `posi1`.\n* `edge1#pg` gets the polygons that include the edge stored in the variable `edge1`.\n\nNote that the `#` shorcut will always return a list of entities, even when only a single entity is returned. If you require just a single entity, then index notation can be used as follows:\n\n* `edge1#pg[0]` gets the first polygon that includes the edge stored in the variable `edge1`.\n'],
    ['entity@name', 'The `entity@name` expression is used to get attributes from entities in the model. For example:\n\n* `pgon1@abc` gets the value of an attribute called `abc` from the polygon that is stored in the variable `pgon1`. (Note that if an attribute with that name does not exist, then an error will be thrown.)\n* `posi1@xyz` gets the value of an attribute called `xyz` from the position that is stored in the variable `posi1`. ((Note that the `xyz` attribute is a built in attribute that stores the location of a position.)\n\n\n'],
    ['?@name == value', 'The `?@name == value` expression is used to filter a list of entities based on attribute values. The `?@` characters can be read as "where attribute". \n\nAny of the  following comparators can be used: `==`, `!=`, `>`, `>=`, `<`, `<=`.\n\nThe `?@name == value` exxpression is often compined with the `#XX` expression. For example:\n\n* `#pg ?@abc == 10` gets all the polygons in the model, and then filters them, returning only the polygons where the attribute `abc` has a value of `10`.\n* `pgon1#ps ?@xyz[2] > 10` gets the positions from the polygon that is stored in the variable `pgon1`, and then filters the positions, returning only the positions where the Z value is greater than 10.\n']
];
const constants = [
    'PI',
    'VX',
    'VY',
    'VZ',
    'VO',
    'RX',
    'RY',
    'RZ',
    'XY',
    'YZ',
    'ZX',
    'YX',
    'ZY',
    'XZ'
];
const conversion = [
    'boolean(val)',
    'number(val)',
    'string(val)',
    'numToStr(num)',
    'radToDeg(rad)',
    'degToRad(deg)'
];
const strings = [
    'len(s)',
    'strUpp(s)',
    'strLow(s)',
    'strTrim(s)',
    'strTrimL(s)',
    'strTrimR(s)',
    'strPadL(s1, m)',
    'strPadR(s1, m)',
    'strRepl(s1, s2, s3)',
    'strSub(s, from)',
    'strStarts(s1, s2)',
    'strEnds(s1, s2)'
];
const lists = [
    'len(list)',
    'range(start, end)',
    'listGet(list, index)',
    'listFind(list, val)',
    'listHas(list, val)',
    'listCount(list, val)',
    'listCopy(list)',
    'listRep(list, num)',
    'listJoin(list1, list2)',
    'listFlat(list)',
    'listRot(list, rot)',
    'listSlice(list, start, end?)',
    'listRev(list)',
    'listSort(list1, list2)',
    'listCull(list1, list2)',
    'listZip(lists)',
    'listEq(list1, list2)'
];
const dictionaries = [
    'len(dict)',
    'dictGet(list, index)',
    'dictKeys(dict)',
    'dictVals(dict)',
    'dictHasKey(dict, key)',
    'dictHasVal(dict, val)',
    'dictFind(dict, val)',
    'dictEq(dict1, dict2)'
];
const sets = [
    'setMake(list)',
    'setUni(list1, list2)',
    'setInt(list1, list2)',
    'setDif(list1, list2)'
];
const vectors = [
    'vecAdd(v1, v2)',
    'vecSub(v1, v2)',
    'vecDiv(v, num)',
    'vecMult(v, num)',
    'vecSum(...v)',
    'vecAvg(...v)',
    'vecAvgDir(...v)',
    'vecLen(v)',
    'vecSetLen(v, num)',
    'vecNorm(v)',
    'vecRev(v)',
    'vecFromTo(xyz1, xyz2)',
    'vecAng(v1, v2)',
    'vecAng2(v1, v2, n)',
    'vecDot(v1, v2)',
    'vecCross(v1, v2)',
    'vecEqual(v1, v2, tol)',
    'vecLtoG(v, p)',
    'vecGtoL(v, p)'
];
const colors = [
    'colFalse(val, min, max)',
    'colScale(val, min, max, sc)'
];
const planes = [
    'plnMake(o, x, xy)',
    'plnCopy(p)',
    'plnMove(p, v)',
    'plnLMove(p, v)',
    'plnRot(p, r, ang)',
    'plnLRotX(p, ang)',
    'plnLRotY(p, ang)',
    'plnLRotZ(p, ang)'
];
const rays = [
    'rayMake(o, d)',
    'rayFromTo(xyz1, xyz2)',
    'rayCopy(r)',
    'rayMove(r, v)',
    'rayRot(r1, r2, a)',
    'rayLMove(r, d)',
    'rayFromPln(p)',
    'rayLtoG(v, p)',
    'rayGtoL(v, p)'
];
const random = [
    'rand(min, max)',
    'randInt(min, max)',
    'randPick(list, num)'
];
const arithmetic = [
    'abs(num)',
    'square(num)',
    'cube(num)',
    'pow(num, pow)',
    'sqrt(num)',
    'exp(num)',
    'log(num)',
    'round(num)',
    'sigFig(num, f)',
    'ceil(num)',
    'floor(num)',
    'sum(list)',
    'prod(list)',
    'hypot(list)',
    'norm(list)',
    'isApprox(num1, num2, tol)',
    'isIn(num1, num2, num3)',
    'isWithin(num1, num2, num3)',
    'remap(num, d1, d2)'
];
const geometry = [
    'distance(a, b)',
    'distanceM(a, b)',
    'distanceMS(a, b)',
    'intersect(a, b)',
    'project(a, b)'
];
const statistics = [
    'min(list)',
    'max(list)',
    'mad(list)',
    'mean(list)',
    'median(list)',
    'mode(list)',
    'std(list)',
    'vari(list)'
];
const trigonometry = [
    'sin(rad)',
    'asin(num)',
    'sinh(rad)',
    'asinh(num)',
    'cos(rad)',
    'acos(num)',
    'cosh(rad)',
    'acosh(num)',
    'tan(rad)',
    'atan(num)',
    'tanh(rad)',
    'atanh(num)',
    'atan2(num1, num2)'
];
const types = [
    'isNum(val)',
    'isInt(val)',
    'isFlt(val)',
    'isBool(val)',
    'isStr(val)',
    'isList(val)',
    'isDict(val)',
    'isVec2(val)',
    'isVec3(val)',
    'isCol(val)',
    'isRay(val)',
    'isPln(val)',
    'isNaN(val)',
    'isNull(val)',
    'isUndef(val)'
];
export const inline_func = [
    ['queries', inline_query_expr],
    ['constants', constants],
    ['conversion', conversion],
    ['strings', strings],
    ['lists', lists],
    ['dictionaries', dictionaries],
    ['sets', sets],
    ['vectors', vectors],
    ['rays', rays],
    ['planes', planes],
    ['colors', colors],
    ['arithmetic', arithmetic],
    ['statistics', statistics],
    ['trigonometry', trigonometry],
    ['geometry', geometry],
    ['random', random],
    ['types', types],
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9pbmxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxpQkFBaUIsR0FBRztJQUN0QixDQUFDLEtBQUssRUFBRSw4akJBQThqQixDQUFDO0lBQ3ZrQixDQUFDLFdBQVcsRUFBRSwwc0NBQTBzQyxDQUFDO0lBQ3p0QyxDQUFDLGFBQWEsRUFBRSw0Z0JBQTRnQixDQUFDO0lBQzdoQixDQUFDLGlCQUFpQixFQUFFLHNyQkFBc3JCLENBQUM7Q0FDOXNCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNkLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0NBQ1AsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0NBQ2xCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNaLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRztJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlC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