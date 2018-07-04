/**
 * Module dependencies
 */

var browser = require('is-browser');
var slice = [].slice;

/**
 * Export `yieldly`
 */

module.exports = yieldly;

/**
 * Initialize `yieldly`
 */

function yieldly(fn) {
  if ('function' != typeof fn) throw new Error('function required');

  return function() {
    var args = slice.call(arguments);
    var last = args[args.length - 1];
    var done = 'function' == typeof last && last;
    var ctx = this;

    return browser || done
      ? fn.apply(ctx, args)
      : function (cb) { return fn.apply(ctx, args.concat(cb)); };
  }
}
