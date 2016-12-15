/**
 * 
 * @fileOverview 开发服务器程序，启动整体的开发服务；
 * @date 2016-11-07 星期一
 * 
 * 
 * 
 * 
 * 
 */

const Koa = require('koa');
const serve = require('koa-static');
const app = Koa();

app.use(serve(__dirname + '/../pre'));
app.listen('8080');


