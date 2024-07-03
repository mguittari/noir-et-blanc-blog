/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "User" as configuration
    super({ table: "comment" });
  }

  postComment(title, content, id_user, id_article) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, id_user, id_article) VALUES (?, ?, ?)`,
      [title, content, id_user, id_article]
    );
  }

  clickToLike(id, nb_like) {
    return this.database.query(
      `UPDATE ${this.table} SET nb_like = ${nb_like + 1} WHERE id = ${id}`,
      [id, nb_like]
    );
  }

  deleteComment(id) {
    return this.database.query(`delete from ${this.table} where id=${id}`);
  }

  //   queryGetAllCommentByUser: (id) => {
  //     return db.query(
  //       `SELECT u.id, u.firstname, u.lastname, u.email, JSON_ARRAYAGG(c.name) AS comments
  //       FROM user AS u
  //       JOIN comment AS c ON u.id = c.id_user
  //       WHERE u.id = ${id}
  //       ;`
  //     );
  //   },

  //   getAllBookingsByUser(id) {
  //     return this.database.query(
  //       `select u.id, u.firstname, u.lastname, u.email,
  //             JSON_ARRAYAGG(
  //                 JSON_OBJECT(
  //             'destination', t.destination_name,
  //             'n°réservation', b.id,
  //             'date de la réservation', b.booking_date,
  //             'insurance_annulation', p.cancellation_insurance,
  //             'quantity', p.quantity,
  //             'date_departure', pr.date_departure,
  //             'date_return', pr.date_return,
  //             'total_price', FORMAT(p.quantity * p.unit_price, 2)
  //                             ))
  //                     as bookings from user as u
  //                     join booking as b on u.id = b.id_user
  //                     join payment as p on p.id = b.id_payment
  //                     join travel as t on t.id = b.id_travel
  //                     join period as pr on pr.id = b.id_period
  //         WHERE
  //             u.id = ${id}`
  //     );
  //   }
}

module.exports = CommentManager;
