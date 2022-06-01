const cron = require('node-cron');

exports.cron1 = () => {
    cron.schedule('0 * * * *', () => {
    console.log('running a task every hour');
    });
}