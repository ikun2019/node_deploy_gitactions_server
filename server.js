const express = require('express');
const cors = require('cors');
const path = require('path');

// * routerのインポート
const postsRouter = require('./router/posts.router');

const app = express();
app.use(cors());
app.use(express.json());

// * nuxt関連
app.use(express.static(path.join(__dirname, 'public')));
// Nuxt.jsアプリケーションのルートハンドラの設定
const { Nuxt, Builder } = require('nuxt');
const config = require('../client/nuxt.config.js');
config.dev = false;
async function start() {
  const nuxt = new Nuxt(config);
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // Nuxt.jsのルートハンドラを使用する
  app.use(nuxt.render);
}

// * routerをマウント
app.use(postsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running. PORT = ${PORT}`);
})

start();