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

  getLikes(id_comment) {
    return this.database.query(
      `SELECT
       ul.id AS id_like,
       ul.id_user,
       ul.id_comment,
       u.pseudo AS who_likes
      FROM ${this.table} as ul
      JOIN user as u
      ON ul.id_user = u.id
       WHERE id_comment = ?`,
      [id_comment]
    );
  }
}

module.exports = UserLikeManager;
