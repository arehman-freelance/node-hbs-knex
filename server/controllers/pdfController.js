const html_to_pdf = require('html-pdf-node');

// View Login
exports.view = (req, res) => {

let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

    res.render('pdf1', {name:'AAA'}, (err, html)=>{
        let file = { content: html };
        html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        res.contentType("application/pdf");
        res.send(pdfBuffer)
        });
 
    });  
}
