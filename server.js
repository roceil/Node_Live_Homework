const http = require('http')
const {
  userController,
  homeController,
  logController,
} = require('./controller')
const headers = {
  'Access-Control-Allow-Headers':
    'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
  'Content-Type': 'application/json',
}

const router = (req, res) => {
  // 組合請求方法和URL作為switch的條件
  const route = `${req.method} ${req.url}`

  switch (route) {
    case 'GET /':
      homeController.getHome(req, res)
      break

    case 'GET /user':
      userController.getUsers(req, res)
      break

    case 'POST /user':
      userController.createUser(req, res)
      break

    case 'GET /log':
      logController.getLog(req, res)
      break

    case 'OPTIONS /':
      res.writeHead(200, headers)
      res.end()
      break

    default:
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({ message: 'Not Found' }))
      res.end()
  }
}

// 啟動 server
const server = http.createServer((req, res) => router(req, res))
server.listen(1234)
