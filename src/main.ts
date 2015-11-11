import express = require("express");
import bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello, World!");
});

import PostsController from "./controllers/posts_controller";
new PostsController().registerRoutes(app);

app.listen(3000);
