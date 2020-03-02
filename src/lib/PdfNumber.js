const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// Number object type
class PdfNumber extends PdfObject {
    constructor(value) {
        if (typeof value !== 'number') {
            throw new Error(pdfErrors.valIsNotNum)
        }
        super(value)
    }
}

module.exports = PdfNumber