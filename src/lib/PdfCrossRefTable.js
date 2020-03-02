const EOL = require('../utils/eol')
const pdfKeywords = require('../utils/pdfKeywords')
const PdfRenderableObject = require('./PdfRenderableObject')

// Cross reference table representation
class PdfCrossRefTable {
    constructor(data) {
        this._data = data
    }

    static _leftPad = (input, length, padChar) => {
        const text = input.toString()
        let output = text

        for (let i = 0; i < length - text.length; i++) {
            output = padChar + output
        }

        return output
    }

    render = _ => {
        const objCount = PdfRenderableObject.currIndex()
        let xrefOutput = pdfKeywords.XREF + EOL + '0 ' + (objCount + 1) + EOL + '0000000000 65535 f' + EOL

        for (let i = 1; i <= objCount; i++) {
            const objIndex = this._data.indexOf(i + ' 0 ' + pdfKeywords.OBJ)
            const xrefRow = PdfCrossRefTable._leftPad(objIndex, 10, '0') + ' 00000 n' + EOL

            xrefOutput = xrefOutput + xrefRow
        }

        return xrefOutput
    }
}

module.exports = PdfCrossRefTable