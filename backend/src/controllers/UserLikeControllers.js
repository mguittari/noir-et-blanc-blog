/* eslint-disable camelcase */
const tables = require("../tables");

const toggleLike = async (req, res) => {
  try {
    const { id_comment } = req.params;
    const id_user = req.payload;

    // Vérifier si l'utilisateur a déjà liké ce commentaire
    const [existingLike] = await tables.user_like.checkIfUserLiked(
      id_user,
      id_comment
    );
    if (existingLike.length > 0) {
      // Si le like existe, le retirer
      await tables.user_like.removeUserLike(id_user, id_comment);
      await tables.comment.clickToUnlike(id_comment);
      return res.status(200).json({ message: "Like retiré !" });
    }
    // Sinon, ajouter un nouveau like
    await tables.user_like.addUserLike(id_user, id_comment);
    await tables.comment.clickToLike(id_comment);
    return res.status(201).json({ message: "Commentaire liké !" });
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).send(error);
  }
  return null;
};

module.exports = {
  toggleLike,
};
