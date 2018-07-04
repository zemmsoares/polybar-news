/**
 * Export `rate_limit`
 */

module.exports = rate_limit

/**
 * Create a rate limiter
 *
 * @param {Number} requests
 * @param {Number} rate
 * @return {Number}
 */

function rate_limit(requests, rate) {
  requests = requests || Infinity
  rate = rate || 0

  var rate = Math.round(rate / requests)
  var waiting = 0
  var called = 0
  var tids = []

  return function _rate_limit(fn) {
    // clear all timeouts if _rate_limit(0)
    if (0 === fn) return tids.forEach(clearTimeout)

    var calling = new Date()
    var delta = calling - called
    var free = delta > rate && !waiting

    if (free) {
      called = calling
      return 0
    } else {
      var wait = (rate - delta) + (waiting++ * rate)
      timer(wait)
      return wait
    }

    function timer(ms) {
      tids[tids.length] = setTimeout(function() {
        called = new Date()
        waiting--
      }, ms)
    }
  }
}
