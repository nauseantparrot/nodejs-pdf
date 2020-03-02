const EOL = require('../utils/eol')
const pdfEnclosers = require('../utils/pdfEnclosers')
const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// Dictionary object type
class PdfDictionary extends PdfObject {
    constructor(value) {
        if (typeof value !== 'object') {
            throw new Error(pdfErrors.valIsNotObj)
        }
        super(value)
    }

    get value() {
        return (
            pdfEnclosers.pdfDictionary.open + EOL +
            (
                Object.keys(this._value)
                    .map(key => key + ' ' + this._value[key].value)
                    .join(EOL)
            ) +
            EOL + pdfEnclosers.pdfDictionary.close
        )
    }
}

module.exports = PdfDictionary