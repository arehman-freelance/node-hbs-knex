import html_to_pdf from  'html-pdf-node'
import * as emailUtils from '../utils/emails.js';

// View Login
export const send = (req, res) => {

    res.render('email1', {name:'kuch bhi'}, (err, html)=>{
        emailUtils.send_email(html)
        res.render('home')
    });  
}
