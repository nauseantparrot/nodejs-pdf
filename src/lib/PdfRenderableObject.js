const EOL = require('../utils/eol')
const pdfKeywords = require('../utils/pdfKeywords')
const PdfObject = require('./PdfObject')

// Abstract pdf renderable object representation
class PdfRenderableObject extends PdfObject {
    constructor(value) {
        super(value)
        this._index = PdfRenderableObject._nextIndex()
    }

    get index() {
        return this._index
    }

    static _counter = 0

    static _nextIndex = _ => {
        PdfRenderableObject._counter += 1
        return PdfRenderableObject._counter
    }

    static currIndex = _ => PdfRenderableObject._counter

    _build = _ => {
        return (
            this.index + ' 0 ' + pdfKeywords.OBJ + EOL + this.value + EOL + pdfKeywords.ENDOBJ + EOL
        )
    }

    render = _ => this._build()
}

module.exports = PdfRenderableObject