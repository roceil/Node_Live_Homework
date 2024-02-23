const getHome = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Welcome to the Node_Service' }))
}

module.exports = { getHome }
