const Queue = require('bull');

const myFirstQueue = new Queue('my-first-queue', 'redis://redis:6379');


exports.enqueue = async(p_job) => {
    const job = await myFirstQueue.add(p_job);
}

exports.process_queues = () => {
    myFirstQueue.process(async (job) => {
        return doSomething(job.data);
      });
}

const doSomething = (job) => {
    console.log(job)
}