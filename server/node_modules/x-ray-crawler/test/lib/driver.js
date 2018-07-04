'use strict';

const superagent = require('superagent');

const agent = superagent.agent({});

module.exports = function http(ctx, fn) {
    agent
        .get(ctx.url)
        .set(ctx.headers)
        .end(function(err, res) {
            if (err) {
                return fn(err);
            }
            ctx.status = res.status;
            ctx.set(res.headers);
            ctx.body = 'application/json' == ctx.type ? res.body : res.text
            // update the URL if there were redirects
            ctx.url = res.redirects.length ? res.redirects.pop() : ctx.url
            return fn(null, ctx);
        });
};
