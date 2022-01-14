import os

src = 'src/inline'

fileList = []

for file in os.listdir(src):
    if file.endswith(".ts"):
        f = open(os.path.join(src, file), 'r')
        fileString = f.read()
        f.close()
        funcsSplit = fileString.split('export function')
        if len(funcsSplit) == 1:
            continue
        appendString = ('\nexport class ' + file.split('.ts')[0] + 'Class {\n' +
            '    __debug__: boolean\n' +
            '    constructor(debug: boolean) {\n' +
            '        this.__debug__ = debug\n' +
            '    }\n')
        fileList.append(file.split('.ts')[0])
        for i in range(1, len(funcsSplit)):
            funcDetailString = funcsSplit[i].split(')')[0]
            detailSplit = funcDetailString.split('(')
            funcName = detailSplit[0].strip()
            paramList = []
            callParamList = []
            for paramString in detailSplit[1].split(','):
                paramName = paramString.split(':')[0].strip()
                if paramName == 'debug':
                    callParamList.append('this.__debug__')
                    continue
                callParamList.append(paramName)
                paramList.append(paramName)
            appendString += '\n    ' + funcName + '(' + ', '.join(paramList) + ') {\n'
            appendString += '        return ' + funcName + '(' + ', '.join(callParamList) + ');\n'
            appendString += '    }\n'

        appendString += '}\n\n'
        print(appendString)
        f = open(os.path.join(src, file), 'a')
        f.write(appendString)
        f.close()

f = open('src/index.ts', 'a')
f.write('\nexport class InlineClass {\n' +
'    __debug__: boolean\n')
s1 = ''
s2 = ''
for file in fileList:
    s1 += '    ' + file + ': ' + file + '.' + file + 'Class\n'
    s2 += '        this.' + file + ' = ' + file + '.' + file + 'Class(debug)\n'
f.write(s1)
f.write(
'    constructor(debug: boolean) {\n' +
'        this.__debug__ = debug\n' + s2 +
'    }\n'
)

f.close()
