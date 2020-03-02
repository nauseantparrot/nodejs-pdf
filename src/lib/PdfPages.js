const isoPredefNames = require('../utils/isoPredefNames')
const PdfArray = require('./PdfArray')
const PdfDictionary = require('./PdfDictionary')
const PdfName = require('./PdfName')
const PdfNumber = require('./PdfNumber')
const PdfObject = require('./PdfObject')
const PdfRenderableObject = require('./PdfRenderableObject')

// Document pages parent representation
class PdfPages extends PdfRenderableObject {
    constructor() {
        super([])
    }

    addItem = item => {
        item.parent = this
        this._value = [...this._value, item]
    }

    get value() {
        const objDict = new PdfDictionary({
            [isoPredefNames.type]: new PdfName(isoPredefNames.pages),
            [isoPredefNames.kids]: new PdfArray(
                this._value
                    .map(item => new PdfObject(item.index + ' 0 R'))
            ),
            [isoPredefNames.count]: new PdfNumber(this._value.length)
        })

        return objDict.value
    }

    render = _ => {
        const pages = this._value
            .map(item => item.render())
            .join('')
        
        return this._build() + pages
    }
}

module.exports = PdfPages