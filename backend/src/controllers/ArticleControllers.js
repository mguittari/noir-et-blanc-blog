/* eslint-disable camelcase */
const fs = require("fs");
const tables = require("../tables");

const getAllArticleTitlesOrderByPublicationDate = async (req, res) => {
  try {
    // Récupérer les titres des articles triés par date de publication

    const [articles] = await tables.article.getTitlesOrderByDate();

    // Créer un tableau d'objets contenant le titre et la date de publication de chaque article
    const articleData = articles.map((article) => ({
      title: article.title,
      publication_date: new Date(article.created_at)
        .toISOString()
        .split("T")[0], // Assumant que la date de publication est stockée dans la colonne created_at
    }));

    // Envoyer les données des articles au client
    res.status(200).json({ articles: articleData });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur avec le code d'état 500
    res.status(500).send(error);
  }
};

const postArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const img_url = req.file.path;
    const [result] = await tables.article.postArticle(title, content, img_url);
    if (result.affectedRows) {
      res.status(201).json({ message: "Article publié !" });
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("Publication impossible");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);
    res.status(500).send(error);
  }
};

const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    const [article] = await tables.article.getArticleById(id);
    if (article.length) {
      res.status(200).send(article);
    } else {
      res.status(404).send("Article introuvable");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.article.deleteArticle(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " L'article a bien été supprimé'",
      });
    } else {
      res.status(400).send("Cet article n'existe pas");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const [result] = await tables.article.updateArticle(title, content, id);
    if (result.affectedRows) {
      res.status(200).json({ message: "L'article a bien été mis à jour" });
    } else {
      res.status(401).send("Modification impossible, réessayez pour voir");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateThumbnail = async (req, res) => {
  try {
    const { id } = req.params;
    console.info("id:", id);
    const img_url = req.file.path;
    console.info("img_url:", img_url);
    const [article] = await tables.article.getArticleById(id);
    console.info("article:", article);

    if (article.length) {
      console.info("je suis dans if");
      fs.unlinkSync(article[0].img_url);
      await tables.article.updateThumbnailArticle(id, img_url);
      res.send("Image mise à jour avec succès");
    } else {
      fs.unlinkSync(req.file.path);

      res.status(401).send("Vérifiez vos données");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);
    res.status(500).send(error);
  }
};

const getAllCommentsByArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const [comments] = await await tables.article.getAllCommentsByArticle(id);
    if (comments) {
      res.json(comments);
    } else {
      res.status(401).send("client n'existe pas avec cette reservation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postArticle,
  getArticleById,
  deleteArticle,
  updateArticle,
  getAllArticleTitlesOrderByPublicationDate,
  getAllCommentsByArticle,
  updateThumbnail,
};
