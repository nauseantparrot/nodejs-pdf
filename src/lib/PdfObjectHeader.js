const pdfErrors = require('../utils/pdfErrors')

// Object header representation
class PdfObjectHeader {
    constructor(value) {
        if (typeof value !== 'number') {
            throw new Error(pdfErrors.valIsNotNum)
        }
        this._value = value
    }

    get value() {
        return this._value + ' 0 R'
    }
}

module.exports = PdfObjectHeader