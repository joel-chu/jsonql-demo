const server = require('server-io-core')
const jsonqlKoa = require('jsonql-koa')
const { join } = require('path')


// the bare minimum setup 
server({
  webroot: [
    join(__dirname, 'node_modules'),
    join(__dirname, 'public')
  ],
  middlewares: [
    jsonqlKoa()
  ]
})
