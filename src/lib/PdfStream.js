const EOL = require('../utils/eol')
const isoPredefNames = require('../utils/isoPredefNames')
const pdfKeywords = require('../utils/pdfKeywords')
const PdfDictionary = require('./PdfDictionary')
const PdfNumber = require('./PdfNumber')
const PdfRenderableObject = require('./PdfRenderableObject')

// Stream object type
class PdfStream extends PdfRenderableObject {
    constructor() {
        super([])
    }

    addItem = item => {
        this._value = [...this._value, item]
    }

    get value() {
        const content = this._value
            .map(item => item.value)
            .join('')

        const streamDict = new PdfDictionary({
            [isoPredefNames.length]: new PdfNumber(content.length)
        })

        return (
            streamDict.value + EOL + pdfKeywords.STREAM + EOL + content + pdfKeywords.ENDSTREAM
        )
    }
}

module.exports = PdfStream