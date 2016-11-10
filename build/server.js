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

// Call up the system
const spawn = require('child_process').spawn;
const webpack = spawn('webpack', ['--config', './build/webpack.config.js', '--watch']);
webpack.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

webpack.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
});


const Koa = require('koa');
const serve = require('koa-static');
const app = Koa();

app.use(serve(__dirname + '/../pre'));
app.listen('8080');