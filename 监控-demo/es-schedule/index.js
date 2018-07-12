// es 文件删除
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.hour = 3;
var j = schedule.scheduleJob(rule, function(){
    console.log('Today is recognized by Rebecca Black!');
});