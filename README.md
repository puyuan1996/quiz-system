# quiz-system

# 答题系统

这是一个使用 Vue.js、Element UI 和 Express.js 构建的答题系统。该系统允许用户回答有关问题，并将答案提交到后端服务器进行处理。

## 功能特点

- 使用 Vue.js 作为前端框架，提供响应式和交互式的用户界面
- 使用 Element UI 组件库，快速构建美观的用户界面
- 使用 Express.js 作为后端服务器，处理来自前端的请求
- 使用 Axios 发送 HTTP 请求，与后端服务器进行通信
- 支持用户提交答案并接收反馈
- 提供重置答题表单的功能

## 安装与运行

### 前端部分

1. 确保你已经安装了 Node.js 和 npm（Node Package Manager）。

2. 克隆此仓库到本地：

   ```
   git clone https://github.com/puyuan1996/quiz-system.git
   ```

3. 进入项目目录：

   ```
   cd quiz-system
   ```

4. 安装前端依赖：

   ```
   npm install
   ```

5. 运行前端应用：

   ```
   npm run serve
   ```

6. 在浏览器中访问 `http://localhost:8080` 以查看前端界面。

### 后端部分

1. 进入后端目录：

   ```
   cd quiz-system/src
   ```

2. 运行后端服务器：

   ```
   node server.js
   ```
   
3.后端服务器将在 `http://localhost:8080` 上运行。

## 项目核心文件

```
quiz-system/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── App.vue
  │   └── main.js
  │   └── server.js
  ├── package.json
  └── README.md
```

- `public/`: 包含公共文件，如 `index.html`。
- `src/`: 包含前端 Vue.js 应用的源代码。
  - `App.vue`: 主要的 Vue 组件，包含答题表单和提交逻辑。
  - `main.js`: 前端应用的入口文件，配置 Vue 应用和 Axios。
  - `server.js`: 后端服务器的入口文件，处理前端提交的答案。
- `package.json`: 项目的依赖项和脚本配置文件。
- `README.md`: 项目的说明文档。

## 贡献

如果你想为这个项目做出贡献，欢迎提交 Pull Request 或者提出 Issue。

## 许可

该项目采用 [MIT 许可证](https://opensource.org/licenses/MIT)。
