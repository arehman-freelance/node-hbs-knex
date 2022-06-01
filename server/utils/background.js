let service;
let process;

exports.backgroundfunction = () =>{

    // Both functions will execute in background
    Promise.all([getServices(), getProcess()]).then((val) => {

        service = val[0];
        process = val[1];

        console.log(service, process);

        // Aafter completed this code will be called
        // let users = GetUser(service);
        // let users = GetAdress(process);
        console.log('I am called after all promises completed.')
    });

    // Current example.
    // let service = await GetServices();
    // this.process = await GetProcess();

    /* Code blocks.. */
    console.log('Code will execute without delay...')
}

function getServices() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("service is returned")
        }, 3000);
    });
}

function getProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("process is returned")
        }, 4000);
    });
}
