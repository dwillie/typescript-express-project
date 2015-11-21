import sq = require('sequelize');
import database from "../database";

export let Posts = database.define('Posts', {
  title:    { type: sq.STRING },
  content:  { type: sq.TEXT }
}, {
    tableName: 'posts'
});

// Used to enforce type safety on Posts. 
export interface Post {
  id:       Number;
  title:    String;
  content:  String;
}

Posts.sync();
