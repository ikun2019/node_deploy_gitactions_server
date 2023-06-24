const postsRouter = require('express').Router();

postsRouter.get('/', (req, res) => {
  res.status(200).json({
    message: "posts routerだよ"
  });
});

module.exports = postsRouter;