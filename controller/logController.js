const { log } = require('../model')

const getLog = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(log.getLog()))
  res.end()
}

module.exports = { getLog }
