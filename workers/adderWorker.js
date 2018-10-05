const CronJob = require('cron').CronJob;

const adderWorker = new CronJob(
    "* * * * *",
    function(){

        this.stop

        let total = 0;
        for(let i = 0; i < 15; i++){
            total += Math.floor(Math.random() * (101 - 10) + 10);
        }
        
        console.log(`toal ${total}`);
        
    }
)