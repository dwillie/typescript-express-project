import ic = require("./icontroller");
import express = require("express");

export default class PostsController implements ic.IController {

  private static posts = [
    { "content": "Wow cool omg", "author": "Dave" },
    { "content": "best eva", "author": "Maxine" }
  ];

  registerRoutes(app: express.Application) {
    app.get("/posts",     (req, res) => { new PostsController().index(req, res); });
    app.get("/posts/:id", (req, res) => { new PostsController().show(req, res); });
    app.post("/posts",    (req, res) => { new PostsController().create(req, res); });
  }

  index(req: express.Request, res: express.Response) {
    res.json(PostsController.posts);
  }

  show(req: express.Request, res: express.Response) {
    res.json(PostsController.posts[req.params.id]);
  }

  create(req: express.Request, res: express.Response) {
    PostsController.posts.push({
      content: req.body.content,
      author:  req.body.author
    });

    res.status(201);
    res.json({ "success": true });
  }

}
