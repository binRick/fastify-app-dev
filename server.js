#!/usr/bin/env node

var fastify = require('fastify')(),
    port = 3005;

fastify.get('/', function(request, reply) {
    reply.send({
        hello: 'world'
    })
});

fastify.listen(port, function(err) {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
});