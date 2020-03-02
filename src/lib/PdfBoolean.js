const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// Boolean object type
class PdfBoolean extends PdfObject {
    constructor(value) {
        if (typeof value !== 'boolean') {
            throw new Error(pdfErrors.valIsNotBool)
        }
        super(value)
    }
}

module.exports = PdfBoolean