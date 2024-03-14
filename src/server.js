// 这是一个简单的答题系统的后端服务器
// node server.js 运行服务器

// 引入 express 模块
const express = require('express');
// 引入 body-parser 中间件，用于解析请求体中的 JSON
const bodyParser = require('body-parser');
// 引入 cors 中间件，用于处理跨域请求
const cors = require('cors');

// 创建一个 Express 应用
const app = express();

// 在应用级别添加 CORS 中间件
app.use(cors());

// 应用 body-parser 中间件以解析 JSON 格式的请求体
app.use(bodyParser.json());

// 设置 API 端点
// 假设前端通过 '/api/submit-answers' 端点提交答案
app.post('/api/submit-answers', (req, res) => {
  // 获取请求体中的答案数据
  const answers = req.body;
  console.log('Received answers:', answers);

  // 这里你可以添加代码来处理答案，比如记录到数据库或进行评分

  // 发送响应给前端
  // 假设我们只是返回一个简单的成功消息
  res.status(200).json({ message: '答案提交成功！' });
});

// 设置服务器监听的端口
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
