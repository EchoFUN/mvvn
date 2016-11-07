/**
 * 
 * @fileOverview 自动化执行编辑文件。
 * @date 2016-11-07 星期一
 * 
 * 
 * 
 * 
 * 
 */

const koa = require('koa');
const serve = require('koa-static');

const app = koa();

app.use(serve(__dirname + '/tests'));
app.listen(9222);