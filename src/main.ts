import express = require("express");
import bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello, World!");
});

import RegisterRoutes from "./routes"
RegisterRoutes(app);

app.listen(3000);
