const express = require('express');
const cors = require('cors');

// * routerのインポート
const postsRouter = require('./router/posts.router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running. PORT = ${PORT}`);
})