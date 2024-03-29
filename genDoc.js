const dc = require('./typedoc-json/doc.json');
// const docReplace = require('./typedoc-json/docReplace.json');
const fs = require('fs');
const path = require('path');

function compare(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}

function analyzeParamType(fn, paramType) {
    if (paramType.type === 'array') {
        return `${analyzeParamType(fn, paramType.elementType)}[]`;
    } else if (paramType.type === 'intrinsic' || paramType.type === 'reference') {
        return paramType.name;
    } else if (paramType.type === 'union') {
        return paramType.types.map((tp) => analyzeParamType(fn, tp)).join(' | ');
    } else if (paramType.type === 'tuple') {
        return '[' + paramType.elements.map((tp) => analyzeParamType(fn, tp)).join(', ') + ']';
    } else {
        /**
         * TODO: Update unrecognized param type here
         */
        console.log('param type requires updating:', paramType);
        console.log('in function:', fn.module + '.' + fn.name);
        return paramType.type;
    }
}

function addDoc(mod, docs) {
    const moduleDict = {}

    function getModule(moduleName) {
        if (moduleDict[moduleName]) return moduleDict[moduleName];
        const moduleDoc = {};
        moduleDoc['id'] = moduleName;
        moduleDoc['name'] = moduleName;
        moduleDoc['func'] = [];
        moduleDict[moduleName] = moduleDoc
        docs.push(moduleDoc);
        return moduleDict[moduleName]
    }
    
    for (const func of mod.children) {
        if (func.name === 'InlineFuncs') { continue; }
        const fn = {};
        fn['id'] = func.id;
        fn['name'] = func.name;
        if (!func.sources || !func.sources[0] || !func.sources[0].fileName) {
            continue
        }
        const sourceName = func.sources[0].fileName.split('/')[1].split('.')[0]
        let moduleDoc = getModule(sourceName)
        fn['module'] = sourceName;

        if (!func['signatures']) { continue; }
        if (func['signatures'][0].comment) {
            const cmmt = func['signatures'][0].comment;
            fn['description'] = cmmt.shortText;
            if (cmmt.tags) {
                for (const fnTag of cmmt.tags) {
                    if (fnTag.tag === 'summary') { fn['summary'] = fnTag.text;
                    } else {
                        if (fn[fnTag.tag]) {
                            fn[fnTag.tag].push(fnTag.text);
                        } else {
                            fn[fnTag.tag] = [fnTag.text];
                        }

                    }
                }
            }
            fn['returns'] = cmmt.returns;
            if (fn['returns']) { fn['returns'] = fn['returns'].trim(); }
        }
        fn['parameters'] = [];
        if (func['signatures'][0].parameters) {
            for (const param of func['signatures'][0].parameters) {
                let namecheck = true;

                const constList = ['__constList__', '__model__', '__input__'];
                if (constList.indexOf(param.name) !== -1) {
                    namecheck = false;
                }
                if (!namecheck) {
                    fn['parameters'].push(undefined);
                    continue;
                }
                const pr = {};

                pr['name'] = param.name;
                if (param.comment) {
                    pr['description'] = param.comment.shortText || param.comment.text;
                }
                pr['type'] = analyzeParamType(fn, param.type);
                fn['parameters'].push(pr);
            }
        }
        moduleDoc.func.push(fn);
        moduleDoc.func.sort(compare);
    }
}


function genModuleDocs(docs) {
    let count = 0;
    let indexString = ''
    for (const mod of docs) {
        if (mod.name[0] === '_') { continue; }
        let mdString = `# ${mod.name.toUpperCase()}  \n  \n`;
        indexString += `# ${mod.name.toUpperCase()}  \n`
        if (mod.description) {
            mdString += mod.description + '  \n  \n  \n'
            indexString += mod.description + '  \n'
        }
        indexString += `link: [${mod.name}.md](${mod.name}.md)  \n  \n  \n`
        for (const func of mod.func) {
            fnString = ``;
            fnString += `**Description:** ${func.description}  \n  \n`;
            if (func.parameters && func.parameters.length > 0) {
                fnString += `**Parameters:**  \n`;
                for (const param of func.parameters) {
                    if (!param) {continue; }
                    const paramName = param.name.replace(/_/g, '\\_')
                    fnString += `  * *${paramName}:* ${param.description}  \n`;
                }
            }
            if (func.returns) {
                fnString += `  \n**Returns:** ${func.returns}  \n`;
            }
            if (func.example) {
                fnString += `**Examples:**  \n`;
                for (const i in func.example) {
                    if (!func.example[i]) {continue; }
                    fnString += `  * ${func.example[i]}  \n`;
                    if (func.example_info) {
                        fnString += `    ${func.example_info[i]}  \n`;
                    }
                }
            }
            fnString = `## ${func.name}  \n  \n  \n` + fnString + `  \n  \n`;
            mdString += fnString
        }
        count += 1;
        let countStr = count.toString();
        if (countStr.length === 1) {
            countStr = '0' + countStr;
        }
        // mdString = replaceText(mdString.replace(/\\n/g, '\n'));
        fs.writeFile(`./documentation/${mod.name}.md`, mdString, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log(`successfully saved ${mod.name}.md`);
        });
    }
    fs.writeFile(`./documentation/index.md`, indexString, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(`successfully saved index.md`);
    });

}

// const doc = dc.default;
const doc = dc;
const moduleDocs = [];

// for (const mod of doc.children) {
//     console.log(mod)
//     const modName = mod.name;
//     if (modName.substring(0, 1) === '_' || modName === 'index' || modName === 'categorization') {
//         continue;
//     }
//     addDoc(mod, modName, moduleDocs);
// }
addDoc(doc, moduleDocs);

fs.mkdirSync('./documentation', { recursive: true }, (err) => {
    if (err) throw err;
});

fs.readdirSync('./documentation', (err, files) => {
    if (err) throw err;
    for (const file of files) {
        fs.unlinkSync(path.join('./documentation', file), err => {
            if (err) throw err;
        });
    }
});

genModuleDocs(moduleDocs)

// fs.writeFile(`./typedoc-json/doc.json`, replaceText(JSON.stringify(dc, null, 2)), function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(`successfully saved doc.json`);
// });



