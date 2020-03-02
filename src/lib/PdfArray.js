const pdfEnclosers = require('../utils/pdfEnclosers')
const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// Array object type
class PdfArray extends PdfObject {
    constructor(value) {
        if (!Array.isArray(value)) {
            throw new Error(pdfErrors.valIsNotArr)
        }
        super(value)
    }

    get value() {
        return (
            pdfEnclosers.pdfArray.open +
            (
                this._value
                    .map(item => item.value)
                    .join(' ')
            ) +
            pdfEnclosers.pdfArray.close
        )
    }
}

module.exports = PdfArray