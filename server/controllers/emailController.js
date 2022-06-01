const html_to_pdf = require('html-pdf-node');
// const emailUtils = import('../utils/emails.mjs');

let emailUtils;
async function loadMyModule() {
    const { send_email} = await import('../utils/emails.mjs');
    emailUtils = { send_email}
}

loadMyModule();


// View Login
exports.send = (req, res) => {

    res.render('email1', {name:'kuch bhi'}, (err, html)=>{
        emailUtils.send_email(html)
        res.render('home')
    });  
}
