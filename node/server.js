// 1、使用
var express = require('express');
var app = express();
var http = require("http").Server(app);

// 3、使用 opn模块自动打开默认浏览器
var opn = require('opn');
var port = 4200;
var uri = 'http://localhost:' + port;
// 要打開直接 opn(uri);
// 指定服務器根目錄
app.use('/', express.static(__dirname + '/root'));
// 服务器相应
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/root/index.html');
});

// 监听端口
http.listen(port, function () {
    // 自动打开浏览器
    opn(uri);
    console.log("listening on port:" + port);
});