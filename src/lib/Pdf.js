const EOL = require('../utils/eol')
const isoPredefNames = require('../utils/isoPredefNames')
const pdfKeywords = require('../utils/pdfKeywords')
const PdfCatalog = require('./PdfCatalog')
const PdfCrossRefTable = require('./PdfCrossRefTable')
const PdfDictionary = require('./PdfDictionary')
const PdfInfoObject = require('./PdfInfoObject')
const PdfNumber = require('./PdfNumber')
const PdfObjectHeader = require('./PdfObjectHeader')
const PdfRenderableObject = require('./PdfRenderableObject')

// Document representation
class Pdf {
    constructor(options) {
        this._version = '1.0'
        this._root = new PdfCatalog()
        this._info = new PdfInfoObject(options)
    }

    addPage = page => {
        this._root.addItem(page)
    }

    _build = _ => {
        let output = '%PDF-' + this._version + EOL + this._root.render()

        if (this._info !== null) {
            output += this._info.render()
        }

        return output
    }

    render = _ => {
        const data = this._build()
        const xref = new PdfCrossRefTable(data)

        const trailerDict = new PdfDictionary({
            [isoPredefNames.size]: new PdfNumber(PdfRenderableObject.currIndex() + 1),
            [isoPredefNames.root]: new PdfObjectHeader(this._root.index),
            [isoPredefNames.info]: new PdfObjectHeader(this._info.index)
        })

        return (
            data + xref.render() + pdfKeywords.TRAILER + EOL + trailerDict.value + EOL + pdfKeywords.STARTXREF +
            EOL + data.length + EOL + '%%EOF' + EOL
        )
    }
}

module.exports = Pdf