'use strict';

//var autoprefixer = require('autoprefixer');
var rework = require('rework');
var svg = require('./svg');

module.exports = function (slug) {
  var args = Array.prototype.slice.call(arguments);
  console.log('args', args, args.pop());

  return function (style) {
    this.on('end', function (err, css) {
      var cssObj = rework(css);
      cssObj.use(svg(slug));

      return cssObj.toString();
    });
  };
};
