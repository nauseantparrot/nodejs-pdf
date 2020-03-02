const PdfEncloser = require('../lib/PdfEncloser')

// Document enclosers
const pdfEnclosers = {
    pdfArray: new PdfEncloser('[', ']'),
    pdfDictionary: new PdfEncloser('<<', '>>'),
    pdfString: new PdfEncloser('(', ')'),
}

module.exports = pdfEnclosers