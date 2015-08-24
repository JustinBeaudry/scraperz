var ansi  = require('simple-ansi');
var _     = require('lodash');

// monkey patch console.error
var _err = console.error;
console.error = function consoleError() {
  _err(ansi.bold + ansi.red + '[Scraperz ERROR] ' + ansi.white + _.values(arguments).join(' ') + ansi.reset);
};

// monkey patch console.log
var _log = console.log;
console.log = function consoleLog() {
  _log(ansi.bold + ansi.green + '[Scraperz INFO] ' + ansi.white + _.values(arguments).join(' ') + ansi.reset);
};

process.on('uncaughtExceptions', function(exception) {
  console.error('An exception went uncaught somewhere', exception);
});
