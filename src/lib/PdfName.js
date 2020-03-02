const pdfErrors = require('../utils/pdfErrors')
const PdfObject = require('./PdfObject')

// Name object type
class PdfName extends PdfObject {
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error(pdfErrors.valIsNotStr)
        }
        if (!value.charAt('/')) {
            throw new Error(pdfErrors.valMustStartSol)
        }
        let encodedName = ''
        for (let i = 0; i < value.length; i++) {
            const asciiDecCode = value.charCodeAt(i)
            
            if (asciiDecCode < 33 || asciiDecCode > 126) {
                const asciiHexCode = asciiDecCode.toString(16)
                encodedName += '#' + asciiHexCode
                continue
            }
            encodedName += value.charAt(i)
        }
        super(encodedName)
    }
}

module.exports = PdfName