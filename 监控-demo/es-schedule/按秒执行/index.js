var http = require('http');
var schedule = require("node-schedule");

function httpGet(){
    var uri = `http://120.25.169.8/before/index`;
   http.get(uri, function(res) { 
     console.log("访问个人微博状态码: " + res.statusCode); 
   }).on('error', function(e) { 
     console.log("个人微博 error: " + e.message); 
   }); 
}
var rule1     = new schedule.RecurrenceRule();
var times1    = [1,6,11,16,21,26,31,36,41,46,51,56];
rule1.second  = times1;
schedule.scheduleJob(rule1, function(){
  httpGet();
})  
