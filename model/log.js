const log = []

const getLog = () => log

const addLog = (method, url, statusCode, message) => {
  const time = new Date()
  log.push({
    method,
    url,
    statusCode,
    message,
    time,
  })
}

module.exports = {
  getLog,
  addLog,
}
