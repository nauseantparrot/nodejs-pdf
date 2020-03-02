const PdfName = require('./PdfName')

// Abstract pdf font representation
class PdfFontObject {
    constructor() {
        this._name = new PdfName('/F' + PdfFontObject._nextIndex())
    }

    get name() {
        return this._name.value
    }

    static _counter = 0

    static _nextIndex = _ => {
        PdfFontObject._counter += 1
        return PdfFontObject._counter
    }
}

module.exports = PdfFontObject