const html_to_pdf = require('html-pdf-node');
const emailUtils = require('../utils/emails');

// View Login
exports.send = (req, res) => {

    res.render('email1', {name:'kuch bhi'}, (err, html)=>{
        emailUtils.send_email(html)
        res.render('home')
    });  
}
