import ex = require("express");
import ci = require("./controller_interfaces");
import pm = require("../models/post");

export default class PostsController {

  index(req: ex.Request, res: ex.Response) {
    pm.Posts.findAll().then((posts: pm.Post[]) => {
      res.json(posts);
    });
  }

  show(req: ex.Request, res: ex.Response) {
    let postId = req.params.id;

    pm.Posts.findOne({where: { id: postId }}).then((post: pm.Post) => {
      res.json(post);
    });
  }

  create(req: ex.Request, res: ex.Response) {
    pm.Posts.create({
      title:   req.body.title,
      content: req.body.content
    }).then((post: pm.Post) => {
      res.status(201);
      res.json({ "success": true });
    })
  }

}
