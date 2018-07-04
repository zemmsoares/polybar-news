/**
 * Export `range`
 */

module.exports = range

/**
 * Initialize a `range`
 *
 * @param {Number} from
 * @param {Number} to
 * @return {Function}
 */

function range(from, to) {
  from = from || 0
  to = to || from

  return function() {
    return Math.floor(Math.random() * (to - from + 1) + from)
  }
}
