const http = require('http');

const user_list = [];

const server_listener = (req, res) => {
  router(req, res);
};

// switch 路由
const router = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('歡迎光臨');
    res.end();
    return;
  }

  if (req.url === '/user' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(user_list));
    res.end();
    return;
  } else if (req.url === '/user' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // 將 Buffer 轉換成字符串
    });
    req.on('end', () => {
      const userData = JSON.parse(body); // 現在可以解析 JSON 字符串
      user_list.push(userData); // 將用戶資料添加到陣列中
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(user_list));
      res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ message: 'Not Found' }));
  res.end();
};

const server = http.createServer(server_listener);

server.listen(1234);
