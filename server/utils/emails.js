import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: process.env.EMAIL_USER,
	password: process.env.EMAIL_PASS,
	host: 'mail.supremecluster.com',
    port: process.env.EMAIL_PORT,
    ssl: false
});


export const send_email = async (html) => {
    
    const message = {
        text: 'i hope this works',
        from: process.env.EMAIL_USER,
        to: 'Abdur Rehman <abdur.rehman@mavensolutions.net>',
        subject: 'testing emailjs',
        attachment: [
            { data: html, alternative:true},
        ],
    };
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, function (err, message) {
        console.log(err || message);
    });
    
}
