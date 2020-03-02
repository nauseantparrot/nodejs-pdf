const pdfErrors = require('../utils/pdfErrors')
const pdfInfoObjConfig = require('../utils/pdfInfoObjConfig')
const PdfDictionary = require('./PdfDictionary')
const PdfRenderableObject = require('./PdfRenderableObject')
const PdfString = require('./PdfString')

// Info container object
class PdfInfoObject extends PdfRenderableObject {
    constructor(options) {
        if (typeof options !== 'object') {
            throw new Error(pdfErrors.valIsNotObj)
        }
        let objDict = {}

        Object.keys(options)
            .forEach(key => {
                if (!pdfInfoObjConfig.hasOwnProperty(key)) return

                objDict[pdfInfoObjConfig[key]] = new PdfString(options[key])
            })

        super(new PdfDictionary(objDict))
    }

    get value() {
        return this._value.value
    }
}

module.exports = PdfInfoObject