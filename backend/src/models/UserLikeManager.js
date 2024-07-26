/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserLikeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "User" as configuration
    super({ table: "user_like" });
  }

  checkIfUserLiked(id_user, id_comment) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_user = ? AND id_comment = ?`,
      [id_user, id_comment]
    );
  }

  addUserLike(id_user, id_comment) {
    return this.database.query(
      `INSERT INTO ${this.table} (id_user, id_comment) VALUES (?, ?)`,
      [id_user, id_comment]
    );
  }

  removeUserLike(id_user, id_comment) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_user = ? AND id_comment = ?`,
      [id_user, id_comment]
    );
  }

  getLikes() {
    return this.database.query(
      `SELECT 
       c.id AS id_comment, 
       c.content AS comment_text, 
       u.id AS id_user, 
       u.pseudo AS user_pseudo
       FROM user_like ul
       JOIN user u ON ul.id_user = u.id
       JOIN comment c ON ul.id_comment = c.id`
    );
  }
}

module.exports = UserLikeManager;
