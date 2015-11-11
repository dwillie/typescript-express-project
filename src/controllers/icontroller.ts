import express = require("express");

export interface IController {
  registerRoutes(app: express.Application): void;
}
