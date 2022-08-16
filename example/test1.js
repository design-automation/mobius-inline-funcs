/*
 * TEST
 */
const mobius_inline_funcs = require('@design-automation/mobius-inline-funcs');
const InlineFuncs = mobius_inline_funcs.InlineFuncs();
// -------------------------------
function test() {
    const a = -122 * InlineFuncs.PI;
    const abs_a = InlineFuncs.abs(a)
    return "absolute value of  -122 * pi: " + abs_a
}
return test();
