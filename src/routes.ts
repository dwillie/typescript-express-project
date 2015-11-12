import express = require("express");
import PostsController from "./controllers/posts_controller";
import ic = require("./controllers/controller_interfaces");

export default function RegisterRoutes(app: express.Application) {
  let postsRouter = express.Router();
  registerIndex(postsRouter,  () => { return new PostsController() });
  registerShow(postsRouter,   () => { return new PostsController() });
  registerCreate(postsRouter, () => { return new PostsController() });
  app.use("/posts", postsRouter);
}

function registerResource(router: express.Router, newController: () => ic.Resource) {
  registerIndex(router, newController);
  registerShow(router, newController);
  registerCreate(router, newController);
  registerUpdate(router, newController);
  registerDestroy(router, newController);
}

function registerIndex(router: express.Router, newController: () => ic.Indexable) {
  router.get("/", (req: express.Request, res: express.Response) => { newController().index(req, res) })
}

function registerShow(router: express.Router, newController: () => ic.Showable) {
  router.get("/:id", (req: express.Request, res: express.Response) => { newController().show(req, res) })
}

function registerCreate(router: express.Router, newController: () => ic.Creatable) {
  router.post("/", (req: express.Request, res: express.Response) => { newController().create(req, res) })
}

function registerUpdate(router: express.Router, newController: () => ic.Updatable) {
  router.put("/:id", (req: express.Request, res: express.Response) => { newController().update(req, res) })
}

function registerDestroy(router: express.Router, newController: () => ic.Destroyable) {
  router.delete("/", (req: express.Request, res: express.Response) => { newController().destroy(req, res) })
}
