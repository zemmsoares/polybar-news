/**
 * Export `parse`
 */

module.exports = parse;

/**
 * Module Dependencies
 */

var filter_parser = require('format-parser');

/**
 * Regexps
 */

var rselector = /^([^@]*)(?:@\s*([\w-_]+))?$/;
var rfilters = /\s*\|(?!\=)\s*/;

/**
 * Initialize `parse`
 *
 * @param {String}
 * @return {Object}
 */

 function parse(str) {
  var filters = str.split(rfilters);
  var z = filters.shift();
  var m = z.match(rselector) || [];

  return {
    selector: m[1] ? m[1].trim() : m[1],
    attribute: m[2],
    filters: filters.length ? filter_parser(filters.join('|')) : []
  }
}
