const isoPredefNames = require('../utils/isoPredefNames')
const PdfArray = require('./PdfArray')
const PdfDictionary = require('./PdfDictionary')
const PdfFonts = require('./PdfFonts')
const PdfName = require('./PdfName')
const PdfNumber = require('./PdfNumber')
const PdfObjectHeader = require('./PdfObjectHeader')
const PdfRenderableObject = require('./PdfRenderableObject')
const PdfStream = require('./PdfStream')

// Document page representation
class PdfPage extends PdfRenderableObject {
    constructor(width, height) {
        super()
        this._width = width
        this._height = height
        this._stream = new PdfStream()
        this._fonts = new PdfFonts()
        this._parent = null
    }

    set parent(pagesItem) {
        this._parent = pagesItem
    }

    addItem = item => {
        this._stream.addItem(item)
    }

    addFont = font => {
        this._fonts.addItem(font)
    }

    get value() {
        const srcDict = new PdfDictionary({
            ...{[isoPredefNames.font]: this._fonts}
        })

        const objDict = new PdfDictionary({
            [isoPredefNames.type]: new PdfName(isoPredefNames.page),
            [isoPredefNames.parent]: new PdfObjectHeader(this._parent.index),
            [isoPredefNames.resources]: srcDict,
            [isoPredefNames.mediabox]: new PdfArray([
                new PdfNumber(0),
                new PdfNumber(0),
                new PdfNumber(this._width),
                new PdfNumber(this._height)
            ]),
            [isoPredefNames.contents]: new PdfObjectHeader(this._stream.index)
        })

        return objDict.value
    }

    render = _ => {
        return (
            this._build() + this._stream.render()
        )
    }
}

module.exports = PdfPage