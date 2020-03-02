// Document encloser representation
class PdfEncloser {
    constructor(openStr, closeStr) {
        this._open = openStr
        this._close = closeStr
    }

    get open() {
        return this._open
    }

    get close() {
        return this._close
    }
}

module.exports = PdfEncloser