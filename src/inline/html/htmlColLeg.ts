import * as chroma from 'chroma-js';
/**
 * Returns an html string representing a color legend.
 *
 * @param size Either height, or [width, height] in pixels.
 * @param labels A list of strings, which will be added as labels on the right side.
 * @param col_scale (optional) A color scale, e.g. ['blue', 'green']
 * @returns An html string. 
 */
export function htmlColLeg(
        size: number| [number, number], 
        labels: string[], 
        col_scale: string[] = null
): string {
    size = Array.isArray(size) ? size : [size, 20] as [number, number];
    // calc heights
    const col_row_height = 2; //  2px
    const label_row_height: number = Math.round(size[0] / ((labels.length - 1) * col_row_height)) * col_row_height;
    const col_table_height: number = label_row_height * (labels.length - 1);
    const col_num_rows: number = col_table_height / col_row_height;
    const col_width: number = size[1];
    // if no scale is provided, then default to false color scale
    col_scale = col_scale === null ? ['blue', 'cyan', 'green', 'yellow', 'red'] : col_scale;
    // color
    const ch_scale = chroma.scale(col_scale);
    const ch_domain = ch_scale.domain([0, col_num_rows]);
    // ---------------------------------------------------------------------------------------------
    // table with colours
    let table_html1 = '<table cellspacing="0">'
    const table_row1 = 
        '<tr>' + 
            '<td style="height:' + col_row_height + 'px; width:' + col_width + 
                'px;padding:0px;background-color:rgb($col)" />' + 
        '</tr>'
    for (let i = 0; i < col_num_rows; i++) {
        const col = ch_domain(i).gl();
        const col_str: string = 
            Math.round(col[0] * 255) + ',' + 
            Math.round(col[1] * 255) + ',' + 
            Math.round(col[2] * 255);
        table_html1 += table_row1.replace('$col', col_str);
    }
    table_html1 += '</table>';
    // ---------------------------------------------------------------------------------------------
    // table with labels
    let table_html2 = '<table cellspacing="0">'
    const table_row2 = 
        '<tr>' + 
            '<td style="height:' + label_row_height + 'px;padding:0px;">$text</td>' + 
        '</tr>'
    for (const label of labels) {
        table_html2 += table_row2.replace('$text', '  ' + label);
    }
    table_html2 += '</table>';
    // ---------------------------------------------------------------------------------------------
    // join and return
    return '<table><td>' + table_html1 + '</td><td>' + table_html2 + '</td></table>';
}