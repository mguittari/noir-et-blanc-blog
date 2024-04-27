/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "User" as configuration
    super({ table: "article" });
  }

  getFirstFourArticles() {
    return this.database.query(
      `select *, DATE_FORMAT(created_at, '%d-%m-%Y') AS published_at from ${this.table} LIMIT 4`
    );
  }

  postArticle(title, content, img_url) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content, img_url) VALUES (?, ?, ?)`,
      [title, content, img_url]
    );
  }

  getArticleById(id) {
    return this.database.query(
      `select *, DATE_FORMAT(created_at, '%d-%m-%Y %H:%i:%s') AS published_at from ${this.table} where id= ?`,
      [id]
    );
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

  updateThumbnailArticle(id, img_url) {
    return this.database.query(
      `UPDATE ${this.table} SET img_url = ? WHERE id = ?`,
      // eslint-disable-next-line camelcase
      [img_url, id]
    );
  }

  getTitlesOrderByDate() {
    return this.database.query(
      `SELECT title, created_at from ${this.table} order by created_at DESC`
    );
  }

  getAllCommentsByArticle(id) {
    return this.database.query(
      `SELECT a.id, a.title, JSON_ARRAYAGG(JSON_OBJECT('title', c.title, 'comment', c.content, 'date', DATE_FORMAT(c.created_at, '%d-%m-%Y %H:%i:%s'))) AS comments from article as a join comment as c on a.id = c.id_article where a.id = ${id}`
    );
  }
}

module.exports = ArticleManager;
