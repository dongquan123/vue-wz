'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = {
  NODE_ENV: '"development"',
  API_HOST:'"http://localhost:8080/ssm/"'
}
