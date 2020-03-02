const {
    Pdf,
    PdfPage,
    PdfFont,
    PdfText
} = require('../')

const pdf = new Pdf({
    title: 'Example document',
    author: 'Nickolas Garcia'
})

const page = new PdfPage(500, 800)
const font = new PdfFont()

page.addFont(font)

const title = new PdfText('Title', font, 18, 20, 760)
const subtitle = new PdfText('Subtitle', font, 15, 20, 740)
const paragraph = new PdfText('Lorem ipsum dolor sit amet', font, 12, 20, 720)

page.addItem(title)
page.addItem(subtitle)
page.addItem(paragraph)
pdf.addPage(page)

const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.join(__dirname, 'output.pdf'), pdf.render())