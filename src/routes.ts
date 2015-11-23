import express = require("express");
import ic = require("./controllers/controller_interfaces");

import PostsController from "./controllers/posts_controller";

export default function RegisterRoutes(app: express.Application) {
  app.use("/posts", new RouteMapping()
    .index(PostsController)
    .show(PostsController)
    .create(PostsController)
    .build());
}

class RouteMapping {

  router: express.Router;

  constructor() {
    this.router = express.Router();
  }

  public build(): express.Router {
    return this.router;
  }

  public index(Controller: { new ():ic.Indexable}): RouteMapping {
    this.router.get("/", (req: express.Request, res: express.Response) => { new Controller().index(req, res) });
    return this;
  }

  public show(Controller: { new ():ic.Showable}): RouteMapping {
    this.router.get("/:id", (req: express.Request, res: express.Response) => { new Controller().show(req, res) });
    return this;
  }

  public create(Controller: { new ():ic.Creatable}): RouteMapping {
    this.router.post("/", (req: express.Request, res: express.Response) => { new Controller().create(req, res) });
    return this;
  }
}
