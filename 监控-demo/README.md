# node 定时 删除 es历史数据

## node.js定时事务node-schedule

```js
var schedule = require('node-schedule');
var date = new Date(2012, 11, 21, 5, 30, 0);

var j = schedule.scheduleJob(date, function(){
    console.log('The world is going to end today.');
});

取消预设计划

j.cancel();
```