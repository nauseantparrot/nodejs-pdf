// Abstract pdf object representation
class PdfObject {
    constructor(value) {
        this._value = value
    }
    
    get value() {
        return this._value
    }
}

module.exports = PdfObject