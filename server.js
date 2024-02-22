const http = require('http')

const server_listener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World\n')
  res.end()
}

const server = http.createServer(server_listener)

server.listen(1234)
