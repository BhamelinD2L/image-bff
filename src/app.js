'use strict';

const
	Koa = require('koa'),
	serverless = require('serverless-http');
	const fs = require('fs');
const app = new Koa();

module.exports = app;

const handler = serverless(app, {
	binary: ['image/jpeg']
});

module.exports.handler = async (event, context) => {
	return await handler(event, context);
};

app.use(ctx => {
	ctx.body = 'Hello World';
	const src = fs.createReadStream("POTATO.jpg");
	ctx.response.set("content-type", 'image/jpeg');
	ctx.body = src;
	ctx.status = 200;
});
