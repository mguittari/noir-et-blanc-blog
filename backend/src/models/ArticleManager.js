const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "User" as configuration
    super({ table: "article" });
  }

  postArticle(title, content) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content) VALUES (?, ?)`,
      [title, content]
    );
  }

  getArticleById(id) {
    return this.database.query(`select * from ${this.table} where id=${id}`);
  }

  deleteArticle(id) {
    return this.database.query(`delete from ${this.table} where id=${id}`);
  }

  updateArticle(title, content, id) {
    return this.database.query(
      `UPDATE ${this.table} set title = ?, content = ? where id=${id}`,
      [title, content, id]
    );
  }

  getTitlesOrderByDate() {
    return this.database.query(
      `SELECT title, created_at from ${this.table} order by created_at DESC`
    );
  }
}

module.exports = ArticleManager;
