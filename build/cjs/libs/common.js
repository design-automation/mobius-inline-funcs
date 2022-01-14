"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RE_SPACES = exports.EAttribDataTypeStrs = exports.EAttribPush = exports.ESort = exports.EFilterOperatorTypes = exports.EWireType = exports.EAttribNames = exports.EEntStrToGeomMaps = exports.EEntTypeStr = exports.EEntType = exports.XZPLANE = exports.ZYPLANE = exports.YXPLANE = exports.ZXPLANE = exports.YZPLANE = exports.XYPLANE = exports.LONGLAT = void 0;
// longitude latitude in Singapore, NUS
exports.LONGLAT = [103.778329, 1.298759];
// some constants
exports.XYPLANE = [[0, 0, 0], [1, 0, 0], [0, 1, 0]];
exports.YZPLANE = [[0, 0, 0], [0, 1, 0], [0, 0, 1]];
exports.ZXPLANE = [[0, 0, 0], [0, 0, 1], [1, 0, 0]];
exports.YXPLANE = [[0, 0, 0], [0, 1, 0], [1, 0, 0]];
exports.ZYPLANE = [[0, 0, 0], [0, 0, 1], [0, 1, 0]];
exports.XZPLANE = [[0, 0, 0], [1, 0, 0], [0, 0, 1]];
// Types of entities
var EEntType;
(function (EEntType) {
    EEntType[EEntType["POSI"] = 0] = "POSI";
    EEntType[EEntType["VERT"] = 1] = "VERT";
    EEntType[EEntType["TRI"] = 2] = "TRI";
    EEntType[EEntType["EDGE"] = 3] = "EDGE";
    EEntType[EEntType["WIRE"] = 4] = "WIRE";
    EEntType[EEntType["POINT"] = 5] = "POINT";
    EEntType[EEntType["PLINE"] = 6] = "PLINE";
    EEntType[EEntType["PGON"] = 7] = "PGON";
    EEntType[EEntType["COLL"] = 8] = "COLL";
    EEntType[EEntType["MOD"] = 9] = "MOD";
})(EEntType = exports.EEntType || (exports.EEntType = {}));
// Must match types of entities
var EEntTypeStr;
(function (EEntTypeStr) {
    EEntTypeStr[EEntTypeStr["ps"] = 0] = "ps";
    EEntTypeStr[EEntTypeStr["_v"] = 1] = "_v";
    EEntTypeStr[EEntTypeStr["_t"] = 2] = "_t";
    EEntTypeStr[EEntTypeStr["_e"] = 3] = "_e";
    EEntTypeStr[EEntTypeStr["_w"] = 4] = "_w";
    EEntTypeStr[EEntTypeStr["pt"] = 5] = "pt";
    EEntTypeStr[EEntTypeStr["pl"] = 6] = "pl";
    EEntTypeStr[EEntTypeStr["pg"] = 7] = "pg";
    EEntTypeStr[EEntTypeStr["co"] = 8] = "co";
    EEntTypeStr[EEntTypeStr["mo"] = 9] = "mo";
})(EEntTypeStr = exports.EEntTypeStr || (exports.EEntTypeStr = {}));
// Must match types of entities
// Must also match interface IGeomMaps
var EEntStrToGeomMaps;
(function (EEntStrToGeomMaps) {
    EEntStrToGeomMaps[EEntStrToGeomMaps["up_posis_verts"] = 0] = "up_posis_verts";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_verts_posis"] = 1] = "dn_verts_posis";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_tris_verts"] = 2] = "dn_tris_verts";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_edges_verts"] = 3] = "dn_edges_verts";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_wires_edges"] = 4] = "dn_wires_edges";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_points_verts"] = 5] = "dn_points_verts";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_plines_wires"] = 6] = "dn_plines_wires";
    EEntStrToGeomMaps[EEntStrToGeomMaps["dn_pgons_wires"] = 7] = "dn_pgons_wires";
    EEntStrToGeomMaps[EEntStrToGeomMaps["colls"] = 8] = "colls";
})(EEntStrToGeomMaps = exports.EEntStrToGeomMaps || (exports.EEntStrToGeomMaps = {}));
// Names of attributes
var EAttribNames;
(function (EAttribNames) {
    EAttribNames["COORDS"] = "xyz";
    EAttribNames["NORMAL"] = "normal";
    EAttribNames["COLOR"] = "rgb";
    EAttribNames["TEXTURE"] = "uv";
    EAttribNames["NAME"] = "name";
    EAttribNames["MATERIAL"] = "material";
    EAttribNames["VISIBILITY"] = "visibility";
    EAttribNames["LABEL"] = "label";
    EAttribNames["COLL_NAME"] = "name";
    EAttribNames["TIMESTAMP"] = "_ts";
})(EAttribNames = exports.EAttribNames || (exports.EAttribNames = {}));
// Wire Type
var EWireType;
(function (EWireType) {
    EWireType["PLINE"] = "pline";
    EWireType["PGON"] = "pgon";
    EWireType["PGON_HOLE"] = "pgon_hole";
})(EWireType = exports.EWireType || (exports.EWireType = {}));
// The types of operators that can be used in a filter.
var EFilterOperatorTypes;
(function (EFilterOperatorTypes) {
    EFilterOperatorTypes["IS_EQUAL"] = "==";
    EFilterOperatorTypes["IS_NOT_EQUAL"] = "!=";
    EFilterOperatorTypes["IS_GREATER_OR_EQUAL"] = ">=";
    EFilterOperatorTypes["IS_LESS_OR_EQUAL"] = "<=";
    EFilterOperatorTypes["IS_GREATER"] = ">";
    EFilterOperatorTypes["IS_LESS"] = "<";
    EFilterOperatorTypes["EQUAL"] = "=";
})(EFilterOperatorTypes = exports.EFilterOperatorTypes || (exports.EFilterOperatorTypes = {}));
var ESort;
(function (ESort) {
    ESort["DESCENDING"] = "descending";
    ESort["ASCENDING"] = "ascending";
})(ESort = exports.ESort || (exports.ESort = {}));
var EAttribPush;
(function (EAttribPush) {
    EAttribPush[EAttribPush["AVERAGE"] = 0] = "AVERAGE";
    EAttribPush[EAttribPush["MEDIAN"] = 1] = "MEDIAN";
    EAttribPush[EAttribPush["SUM"] = 2] = "SUM";
    EAttribPush[EAttribPush["MIN"] = 3] = "MIN";
    EAttribPush[EAttribPush["MAX"] = 4] = "MAX";
    EAttribPush[EAttribPush["FIRST"] = 5] = "FIRST";
    EAttribPush[EAttribPush["LAST"] = 6] = "LAST";
})(EAttribPush = exports.EAttribPush || (exports.EAttribPush = {}));
// enums
var EAttribDataTypeStrs;
(function (EAttribDataTypeStrs) {
    // INT = 'Int',
    EAttribDataTypeStrs["NUMBER"] = "number";
    EAttribDataTypeStrs["STRING"] = "string";
    EAttribDataTypeStrs["BOOLEAN"] = "boolean";
    EAttribDataTypeStrs["LIST"] = "list";
    EAttribDataTypeStrs["DICT"] = "dict"; // an object
})(EAttribDataTypeStrs = exports.EAttribDataTypeStrs || (exports.EAttribDataTypeStrs = {}));
exports.RE_SPACES = /\s+/g;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUF1QztBQUMxQixRQUFBLE9BQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUU5QyxpQkFBaUI7QUFDSixRQUFBLE9BQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsUUFBQSxPQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELFFBQUEsT0FBTyxHQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRCxRQUFBLE9BQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsUUFBQSxPQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFF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