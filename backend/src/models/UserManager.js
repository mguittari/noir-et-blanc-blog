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

  checkIfPseudoExist(pseudo) {
    return this.database
      .query(`SELECT COUNT(pseudo) AS pseudoCount FROM user WHERE pseudo = ?`, [
        pseudo,
      ])
      .then((result) => {
        console.info("Result from SQL:", result);
        return result;
      });
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

  updateUserWithoutPassword(id, userWithoutPassword) {
    const columns = Object.keys(userWithoutPassword);
    const valuesColumns = Object.values(userWithoutPassword);
    const values = columns.map((column) => `${column} = ?`).join(", ");
    console.info("columns", columns);
    console.info("valuesColumns", valuesColumns);
    console.info("values", values);

    return this.database.query(
      `UPDATE ${this.table} set ${values} where id = ?`,
      [...valuesColumns, id]
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

  // editUserButOnlyPassword(id, hashed_password) {
  //   return this.database.query(
  //     `UPDATE ${this.table} set hashed_password = ? where id=?`,
  //     [hashed_password, id]
  //   );
  // }

  // The C of CRUD - Create operation

  // async create(user) {
  //   // Execute the SQL INSERT query to add a new User to the "User" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title) values (?)`,
  //     [user.title]
  //   );

  //   // Return the ID of the newly inserted User
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  // Return the first row of the result, which represents the User

  // async readAll() {
  //   // Execute the SQL SELECT query to retrieve all Users from the "User" table
  //   const [rows] = await this.database.query(`select * from ${this.table}`);

  //   // Return the array of Users
  //   return rows;
  // }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing User

  // async update(User) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an User by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
