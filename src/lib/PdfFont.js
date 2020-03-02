const isoPredefNames = require('../utils/isoPredefNames')
const PdfDictionary = require('./PdfDictionary')
const PdfFontObject = require('./PdfFontObject')
const PdfName = require('./PdfName')

// Document font representation
class PdfFont extends PdfFontObject {
    constructor() {
        super()
    }

    get value() {
        const objDict = new PdfDictionary({
            [isoPredefNames.type]: new PdfName(isoPredefNames.font),
            [isoPredefNames.subtype]: new PdfName(isoPredefNames.type1),
            [isoPredefNames.basefont]: new PdfName(isoPredefNames.helvetica)
        })

        return objDict.value
    }
}

module.exports = PdfFont