import express = require("express");
import ci = require("./controller_interfaces");

export default class PostsController {

  private static posts = [
    { "content": "Wow cool omg", "author": "Dave" },
    { "content": "best eva", "author": "Maxine" }
  ];

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
