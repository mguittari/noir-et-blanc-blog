/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "User" as configuration
    super({ table: "user" });
  }

  getAllUsers() {
    return this.database.query(`select * from ${this.table}`);
  }

  getUserByEmail(email) {
    return this.database.query("select * from user where email = ?", [email]);
  }

  getUserByPseudo(pseudo) {
    return this.database.query("select * from user where pseudo = ?", [pseudo]);
  }

  addNewUser({ pseudo, email, hashed_password }) {
    return this.database.query(
      `insert into user(pseudo, email, hashed_password) values(?, ?, ?)`,
      [pseudo, email, hashed_password]
    );
  }

  getUserById(id) {
    return this.database.query(
      `select id as id_user, pseudo, hashed_password, email from ${this.table} where id = ?`,
      [id]
    );
  }

  deleteUser(id) {
    return this.database.query(`delete from user where id=${id}`);
  }

  editUserOnlyPassword(id, hashed_password) {
    return this.database.query(
      `UPDATE ${this.table} set hashed_password = ? where id= ?`,
      [hashed_password, id]
    );
  }

  updateUserWithoutPassword(id, pseudo) {
    return this.database.query(
      `UPDATE ${this.table} set pseudo = '${pseudo}' where id = ${id}`,
      [id, pseudo]
    );
  }

  getAllCommentsByUser(id) {
    return this.database.query(
      `SELECT u.id, u.pseudo, JSON_ARRAYAGG(JSON_OBJECT('article title', a.title, 'comment title', c.title, 'comment', c.content, 'comment date', DATE_FORMAT(c.created_at, '%d-%m-%Y %H:%i:%s'))) AS comments from user as u 
      join comment as c on u.id = c.id_user
      join article as a on a.id = c.id_article
      where u.id = ${id}`
    );
  }

  //   updateUserWithoutPassword(id, userWithoutPassword) {
  //     const columns = Object.keys(userWithoutPassword);
  //     const valuesColumns = Object.values(userWithoutPassword);
  //     const values = columns.map((column) => `${column} = ?`).join(", ");
  //     console.info("columns", columns);
  //     console.info("valuesColumns", valuesColumns);
  //     console.info("values", values);

  //     return this.database.query(
  //       `UPDATE ${this.table} set ${values} where id = ?`,
  //       [...valuesColumns, id]
  //     );
  //   }
}

module.exports = UserManager;
