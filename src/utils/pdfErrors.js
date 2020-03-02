const pdfErrorMessages = require('./pdfErrorMessages')

// Errors configuration
const pdfErrors = {
    valIsNotArr: pdfErrorMessages.valIsNotType('array'),
    valIsNotBool: pdfErrorMessages.valIsNotType('boolean'),
    valIsNotObj: pdfErrorMessages.valIsNotType('object'),
    valIsNotNum: pdfErrorMessages.valIsNotType('number'),
    valIsNotStr: pdfErrorMessages.valIsNotType('string'),
    valMustStartSol: pdfErrorMessages.valMustStartWith('/ (SOLIDUS)'),
}

module.exports = pdfErrors