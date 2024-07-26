/* eslint-disable camelcase */
const tables = require("../tables");

const postComment = async (req, res) => {
  try {
    const { content, id_user, id_article } = req.body;
    const [result] = await tables.comment.postComment(
      content,
      id_user,
      id_article
    );
    if (result.affectedRows) {
      res.status(201).json({ message: "Commentaire posté !" });
    } else {
      res
        .status(401)
        .send(
          "Publication du commentaire impossible. Veuillez réessayer plus tard"
        );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.comment.deleteComment(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " Le commentaire a bien été supprimé'",
      });
    } else {
      res.status(404).send("Ce commentaire n'existe pas");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getLikesOfComments = async (req, res) => {
  try {
    const { id_comment } = req.params;
    const [result] = await tables.user_like.getLikes(id_comment);
    if (result.length) {
      res.status(200).json(result);
    } else {
      res.json(false);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postComment,
  deleteComment,
  getLikesOfComments,
};
