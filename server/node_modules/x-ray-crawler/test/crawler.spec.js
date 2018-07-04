'use strict';

const http    = require('./lib/driver');
const crawler = require('../lib/index');

describe('X-ray Crawler', function() {
    it('can crawl google.com', function(done) {
        const crawl = crawler()
            .throttle(3, '1s')
            .delay('1s', '10s')
            .driver(http)
            .concurrency(2)
            .limit(20);
        crawl('http://google.com', function(err, ctx) {
            if (err) {
                throw err;
            }
            expect(ctx.status).toEqual(200);
            expect(ctx.response.header['content-type']).toMatchSnapshot();
            done();
        });
    });
});
