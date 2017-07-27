import Nuxt from 'nuxt'
import express from 'express'
import proxy from 'http-proxy-middleware'


import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

const option = {
    target: 'https://cnodejs.org',
    changeOrigin: true,
    pathRewrite: {'^/api/cnode' : '/api/v1'}
}

app.use('/api/cnode', proxy(option));
// Import API Routes
// app.use('/api', api)

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()

