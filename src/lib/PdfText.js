const EOL = require('../utils/eol')
const pdfKeywords = require('../utils/pdfKeywords')
const PdfString = require('./PdfString')

// Document text representation
class PdfText {
    constructor(value, font, size, x, y) {
        this._value = new PdfString(value)
        this._font = font
        this._size = size
        this._x = x
        this._y = y
    }

    get value() {
        return (
            pdfKeywords.BT + ' ' + this._font.name + ' ' + this._size + ' ' + pdfKeywords.TF + ' ' + this._x + ' ' + this._y +
            ' ' + pdfKeywords.TD + ' ' + this._value.value + ' ' + pdfKeywords.TJ + ' ' + pdfKeywords.ET + EOL
        )
    }
}

module.exports = PdfText