'use strict';

const fs = require('fs');
module.exports = (router) => {
	router.get('/', async (ctx) => {
        const src = fs.createReadStream("POTATO.jpg");
        ctx.response.set("content-type", 'image/jpeg');
        ctx.body = src;
        ctx.status = 200;
	});
};
