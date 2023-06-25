const postsRouter = require('express').Router();

postsRouter.get('/api/posts', (req, res) => {
  res.status(200).json({
    message: "posts routerだよ"
  });
});

module.exports = postsRouter;