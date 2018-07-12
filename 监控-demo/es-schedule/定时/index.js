// es 文件删除
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 10;
rule.minute = 26;
rule.second = 50;
var j = schedule.scheduleJob(rule, function(){
    console.log('Today is recognized by Rebecca Black!');
});