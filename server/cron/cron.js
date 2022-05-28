import cron from 'node-cron';

export const cron1 = () => {
    cron.schedule('0 * * * *', () => {
    console.log('running a task every hour');
    });
}