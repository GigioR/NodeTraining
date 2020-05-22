const os = require('os');
const log = require('./logger');
//console.log(os.platform());

setInterval( () => {
    const { freemem, totalmem} = os;

//console.log(freemem(), totalmem());

    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }
    
    console.clear();
    console.log("===== PC Stats =====");
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`)

}, 1000)



//console.log(mem, total, percents)

