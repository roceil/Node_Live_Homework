// models/User.js
const { v4: uuid } = require('uuid');
let user_list = [] // 假設使用一個簡單的陣列作為數據儲存

const addUser = user => {
  const userData = {
    id: uuid(),
    name: user.name,
    age: user.age,
  }
  user_list.push(userData)
}

const getUsers = () => {
  return user_list
}

const checkUserBody = userData => {
  if (!userData.name || !userData.age) {
    return false
  }
  return true
}

module.exports = { addUser, getUsers, checkUserBody }
