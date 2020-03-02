# nodejs-pdf

Lightweight library for portable document format (PDF) generation.

## Instalation

Comming soon.

## The Gist

### Instantiate document

```javascript
// Import module
const {
    Pdf
} = require('nodejs-pdf')

const emptyPdf = new Pdf() // Empty pdf

// Create pdf with information
const withInfoPdf = new Pdf({
    title: 'foo',
    author: 'bar'
})
```

List of the posible options for the Pdf constructor passed object.

Name |Value type |Description
--- |--- |---
title |text |Title of the document.
subject |text |Subject of the document.
author |text |Name of the document's author.
creationDate |date |The date the document was created.
modDate |date |The date the document was last modified.
creator |text |The name of the program which originally created the document.
producer |text |The name of the program which converted the document to PDF.

### Add page to document

```javascript
const {
    Pdf,
    PdfPage
} = require('nodejs-pdf')

const pdf = new Pdf({
    title: 'foo',
    author: 'bar'
})

// New page
const page = new PdfPage(500, 800) // 500 width, 800 height

pdf.addPage(page)
```

### Register font

```javascript
// Import module
const {
    Pdf
} = require('nodejs-pdf')

const pdf = new Pdf({
    title: 'foo',
    author: 'bar'
})

const page = new PdfPage(500, 800)
const font = new PdfFont()

page.addFont(font)
```

### Add text to page

```javascript
// Import module
const {
    Pdf
} = require('nodejs-pdf')

const pdf = new Pdf({
    title: 'foo',
    author: 'bar'
})

const page = new PdfPage(500, 800)

const title = new PdfText('Title', font, 18, 20, 760) // 18 size, 20 x, 760 y
const subtitle = new PdfText('Subtitle', font, 15, 20, 740) // 18 size, 20 x, 760 y
const paragraph = new PdfText('Lorem ipsum dolor sit amet', font, 12, 20, 720) // 18 size, 20 x, 760 y

// Add elements to page
page.addItem(title)
page.addItem(subtitle)
page.addItem(paragraph)

pdf.addPage(page) // Add page to document
```

### Save document as file

```javascript
// Import modules
const fs = require('fs')
const path = require('path')
const {
    Pdf
} = require('nodejs-pdf')

const pdf = new Pdf({
    title: 'foo',
    author: 'bar'
})

fs.writeFileSync(path.join(__dirname, 'foo.pdf'), pdf.render())
```