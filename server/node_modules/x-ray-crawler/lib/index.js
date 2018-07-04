/**
 * Export `Create`
 */

module.exports = Crawler

/**
 * Module Dependencies
 */

var context = require('http-context')
var enqueue = require('enqueue')
var wrapfn = require('wrap-fn')
var noop = function(){}
var ms = require('ms')

/**
 * Locals
 */

var rate_limit = require('./rate-limit')
var http = require('./http-driver')
var range = require('./range')

/**
 * Debug
 */

var debug = require('debug')('x-ray-crawler')

/**
 * Initialize a `Crawler`
 *
 * @param {Function} driver (optional)
 * @return {Function} crawler(url, fn)
 * @api public
 */

function Crawler(driver) {
  driver = driver || http();

  // defaults
  var throttle = rate_limit()
  var concurrency = Infinity
  var limit = Infinity
  var request = noop
  var timeout = false
  var response = noop
  var delay = range()
  var queue = false

  /**
   * Make a request
   */

  function crawler(url, fn) {
    // co support
    if (1 == arguments.length) {
      return function _crawler(fn) {
        return crawler(url, fn)
      }
    }

    if (!queue) {
      var options = {
        concurrency: concurrency,
        timeout: timeout,
        limit: limit
      }

      queue = enqueue(get, options)
      queue(url, fn)
    } else {
      schedule(url, fn)
    }

    return crawler
  }

  /**
   * Fetch the `url` based on the `driver`
   *
   * @param {String} url
   * @param {Function} fn
   */

  function get(url, fn) {
    debug('getting: %s', url)
    var ctx = context()
    ctx.url = url

    // request hook
    request(ctx.request)

    wrapfn(driver, result)(ctx)

    // HTTP response
    function result(err, res) {
      if (err) return fn(err)

      // update the context
      if (res && res != ctx) ctx.body = res

      // post-flight. modify the response
      response(ctx.response)

      fn(null, ctx)
    }
  }

  /**
   * Schedule another request for later
   *
   * @param {String} url
   * @param {Function} fn
   */

  function schedule(url, fn) {
    // if we've reached the limit, don't request anymore
    if (--limit <= 0) return

    // if specified, throttle requests and add a delay
    var wait = throttle() + delay()

    debug('queued: "%s", waiting "%sms"', url, wait)
    setTimeout(function() {
      // queue up next request
      var queued = queue(url, fn)
      if (!queued) return
    }, wait)
  }

  /**
   * Get or set the driver
   *
   * @param {Function} driver
   * @return {Function|Crawler}
   * @api public
   */

  crawler.driver = function(fn) {
    if (!arguments.length) return driver;
    driver = fn;
    return crawler;
  }

  /**
   * Throttle according to a rate limit
   *
   * @param {Number|String} requests
   * @param {Number|String} rate
   * @return {Number|Crawler}
   * @api public
   */

  crawler.throttle = function(requests, rate) {
    if (!arguments.length) return throttle

    if (1 == arguments.length) {
      rate = requests
      requests = 1
    }

    rate = /^\d/.test(rate) ? rate : 1 + rate
    rate = 'string' == typeof rate ? ms(rate) : rate
    throttle = rate_limit(requests, rate)
    return crawler
  }

  /**
   * Delay subsequent requests
   *
   * @param {String|Number} from
   * @param {String|Number} to (optional)
   * @return {Number|Crawler}
   * @api public
   */

  crawler.delay = function(from, to) {
    if (!arguments.length) return delay
    from = 'string' == typeof from ? ms(from) : from
    to = 'string' == typeof to ? ms(to) : to
    delay = range(from, to)
    return crawler
  }

  /**
   * Specify a request timeout
   *
   * @param {String|Number} timeout
   * @return {Number|Crawler}
   * @api public
   */

  crawler.timeout = function(n) {
    if (!arguments.length) return n
    timeout = 'string' == typeof n ? ms(n) : n
    return crawler
  }

  /**
   * Specify the driver
   *
   * @param {Function} driver
   * @return {Function|Crawler}
   */

  crawler.driver = function(fn) {
    if (!arguments.length) return driver
    driver = fn
    return crawler
  }

  /**
   * Specify a request concurrency
   *
   * @param {Number} n
   * @return {Number|crawler}
   */

  crawler.concurrency = function(n) {
    if (!arguments.length) return concurrency
    concurrency = n
    return crawler
  }

  /**
   * Hook into the request
   *
   * @param {Function} fn
   * @return {Function|crawler}
   */

  crawler.request = function(fn) {
    if (!arguments.length) return request
    request = fn
    return crawler
  }

  /**
   * Hook into the response
   *
   * @param {Function} fn
   * @return {Function|crawler}
   */

  crawler.response = function(fn) {
    if (!arguments.length) return response
    response = fn
    return crawler
  }

  /**
   * Limit the total number of requests
   *
   * @param {Number} n
   * @return {Number|crawler}
   */

  crawler.limit = function(n) {
    if (!arguments.length) return limit
    limit = n
    return crawler
  }

  return crawler
}
