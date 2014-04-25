/**
 * Created by pinha_000 on 4/22/14.
 */

const config = {
    port: 3000
};
console.log('Starting Node...');
var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    helmet = require('helmet'),
    logger = require('express-logger'),
    path = require('path'),
    restAPI = require('./restAPI');
require('./prototypes');
var app = express()
    .use(require('compression')())
    .use(require('body-parser')())
    .use(require('method-override')())
    .use(require('cookie-session')({
        keys: ['pini', 'houri'],
        cookie: {httpOnly: true}
    }))
    .use(require('morgan')())
    .get('/user', restAPI.users)
    .use(express.static('./client'))
    .all('/*', function (req, res, next) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendfile('./client/index.html');
    });
http.createServer(app).listen(config.port, function () {
    console.log('Http server running at http://localhost:' + config.port);
});
