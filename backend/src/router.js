const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/UserControllers");
const articleControllers = require("./controllers/ArticleControllers");
const commentControllers = require("./controllers/CommentControllers");
const hashPassword = require("./services/hashPassword");
const hashEditPassword = require("./services/hashEditPassword");
const verifyToken = require("./services/auth");
const upload = require("./services/upload");

// routes publiques

router.get("/home", articleControllers.getFirstFourArticles);
router.post("/login", userControllers.getUserByEmail);
router.post("/user", hashPassword, userControllers.addNewUser);
router.get("/article/:id", articleControllers.getArticleById);
router.get(
  "/articles",
  articleControllers.getAllArticleTitlesOrderByPublicationDate
);
router.get("/article/:id/comments", articleControllers.getAllCommentsByArticle);

// routes utilisateur

router.get("/me", verifyToken, userControllers.getUserById);
router.post("/logout", userControllers.logout);
router.delete("/user", verifyToken, userControllers.deleteUser);
router.patch("/user/:id", verifyToken, userControllers.updateUser);
router.patch(
  "/users/update-password",
  verifyToken,
  hashEditPassword,
  userControllers.editPassword
);

router.post("/comment", commentControllers.postComment);
router.delete("/comment/:id", commentControllers.deleteComment);

// routes administrateur

router.get("/users", userControllers.getAllUsers);
router.post("/article", upload, articleControllers.postArticle);
router.patch(
  "/article/:id/update-thumbnail",
  upload,
  articleControllers.updateThumbnail
);
router.delete("/article/:id", articleControllers.deleteArticle);
router.put("/article/:id", articleControllers.updateArticle);
router.get("/user/:id/comments", userControllers.getAllCommentsByUser);

/* ************************************************************************* */

module.exports = router;
