import express = require("express");

export interface Resource {
  index(req: express.Request, res: express.Response): void;
  show(req: express.Request, res: express.Response): void;
  create(req: express.Request, res: express.Response): void;
  update(req: express.Request, res: express.Response): void;
  destroy(req: express.Request, res: express.Response): void;
}

export interface Indexable {
  index(req: express.Request, res: express.Response): void;
}

export interface Showable {
  show(req: express.Request, res: express.Response): void;
}

export interface Creatable {
  create(req: express.Request, res: express.Response): void;
}

export interface Updatable {
  update(req: express.Request, res: express.Response): void;
}

export interface Destroyable {
  destroy(req: express.Request, res: express.Response): void;
}
