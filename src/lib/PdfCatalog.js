const isoPredefNames = require('../utils/isoPredefNames')
const PdfDictionary = require('./PdfDictionary')
const PdfName = require('./PdfName')
const PdfObjectHeader = require('./PdfObjectHeader')
const PdfPages = require('./PdfPages')
const PdfRenderableObject = require('./PdfRenderableObject')

// Document catalog representation
class PdfCatalog extends PdfRenderableObject {
    constructor() {
        super(new PdfPages())
    }

    addItem = page => {
        this._value.addItem(page)
    }

    get value() {
        const objDict = new PdfDictionary({
            [isoPredefNames.type]: new PdfName(isoPredefNames.catalog),
            [isoPredefNames.pages]: new PdfObjectHeader(this._value.index)
        })

        return objDict.value
    }

    render = _ => {
        return (
            this._build() + this._value.render()
        )
    }
}

module.exports = PdfCatalog