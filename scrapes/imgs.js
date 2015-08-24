'use strict';

var imgs = [];
var casper = require('casper').create();
var dump   = require('utils').dump;

function getImgs() {
  var imgs = document.querySelectorAll('img');
  return Array.prototype.map.call(imgs, function(e) {
    return window.location + e.getAttribute('src');
  });
}

casper.start('http://madebyevan.com/webgl-water/');

casper.then(function() {
  imgs = this.evaluate(getImgs);
});

casper.run(function() {
  dump(imgs.length + ' imgs found:');
  imgs.forEach(function(img) {
    dump(img);
  });
  this.exit();
});
