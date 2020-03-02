const pdfEnclosers = require('../utils/pdfEnclosers')
const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// String object type
class PdfString extends PdfObject {
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error(pdfErrors.valIsNotStr)
        }
        super(value)
    }

    get value() {
        return (
            pdfEnclosers.pdfString.open + this._value + pdfEnclosers.pdfString.close
        )
    }
}

module.exports = PdfString