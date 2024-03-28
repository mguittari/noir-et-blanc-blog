const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/UserControllers");
const articleControllers = require("./controllers/ArticleControllers");
const hashPassword = require("./services/hashPassword");
const verifyToken = require("./services/auth");

// routes publiques

router.post("/login", userControllers.getUserByEmail);
router.post("/user", hashPassword, userControllers.addNewUser);

// routes utilisateur
router.get("/me", verifyToken, userControllers.getUserById);
router.post("/logout", userControllers.logout);
router.delete("/user", verifyToken, userControllers.deleteUser);
router.patch("/user", verifyToken, userControllers.updateUser);
router.patch(
  "/user/update-password",
  verifyToken,
  hashPassword,
  userControllers.editPassword
);
router.get("/article/:id", articleControllers.getArticleById);
router.get(
  "/articles",
  articleControllers.getAllArticleTitlesOrderByPublicationDate
);

// routes administrateur
router.get("/users", userControllers.getAllUsers);
router.post("/article", articleControllers.postArticle);
router.delete("/article/:id", articleControllers.deleteArticle);
router.put("/article/:id", articleControllers.updateArticle);

// // Route to add a new item

/* ************************************************************************* */

module.exports = router;
