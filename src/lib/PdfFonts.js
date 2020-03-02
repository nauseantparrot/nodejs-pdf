const PdfDictionary = require('./PdfDictionary')

// Document page fonts representation
class PdfFonts {
    constructor() {
        this._value = []
    }

    addItem = item => {
        this._value = [...this._value, item]
    }

    get value() {
        let objFonts = {}

        this._value
            .forEach(font => {
                objFonts[font.name] = font
            })

        const objDict = new PdfDictionary(objFonts)

        return objDict.value
    }
}

module.exports = PdfFonts