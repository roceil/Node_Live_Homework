// controllers/userController.js
const { user, log } = require('../model')

const getUsers = (req, res) => {
  const users = user.getUsers()
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(users))
}

const createUser = (req, res) => {
  const { checkUserBody, addUser, getUsers } = user
  const { addLog } = log

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    try {
      const userData = JSON.parse(body)
      if (!checkUserBody(userData)) throw new Error('缺少必要欄位')
      addUser(userData)
      addLog(req.method, req.url, 201, '新增使用者')

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(getUsers()))
    } catch (error) {
      console.error(error)
      addLog(req.method, req.url, 400, error.message)
      res.writeHead(400, { 'Content-Type': 'application/json' })
      // 確保傳遞錯誤消息作為響應的一部分
      res.end(JSON.stringify({ message: error.message }))
      return
    }
  })
}

module.exports = { getUsers, createUser }
