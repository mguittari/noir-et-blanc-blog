/* eslint-disable camelcase */
// Import access to database tables
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const getAllUsers = async (req, res) => {
  try {
    const [users] = await tables.user.getAllUsers();
    if (users.length) {
      res.status(200).json({
        message: "Utilisateurs inscrits sur le blog :",
        users,
      });
    } else {
      res.status(200).json({
        message: "Pas d'utilisateur inscrit",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({ message: "Remplissez vos champs svp !" });
    } else {
      const [user] = await tables.user.getUserByEmail(email);

      if (user.length) {
        const isVerify = await argon2.verify(user[0].hashed_password, password);

        if (typeof isVerify === "boolean" && isVerify) {
          const token = jwt.sign(
            { payload: user[0].id },
            process.env.SECRET_KEY_JWT,
            {
              expiresIn: "2h",
            }
          );

          res.status(200).send(token);
        } else {
          res.status(401).send("Adresse mail ou mot de passe incorrect");
        }
      } else {
        res
          .status(401)
          .send("Cette adresse mail n'existe pas dans notre base de donnée");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.payload;
    const [user] = await tables.user.getUserById(id);
    if (user.length) {
      res
        .status(200)
        .json({ message: `Bienvenue ${user[0].pseudo} !`, user: user[0] });
    } else {
      res.status(401).send("Erreur");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const newUser = req.body;
    const [result] = await tables.user.addNewUser(newUser);

    if (result.affectedRows) {
      res.send(`User created with id: ${result.insertId}`);
    } else {
      res
        .status(400)
        .send(
          "Erreur, veuillez réessayer ultérieurement ou contacter l'administrateur de ce site"
        );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const editPassword = async (req, res) => {
  try {
    const id = req.payload;
    const { hashed_password } = req.body;
    const [result] = await tables.user.editUserOnlyPassword(
      id,
      hashed_password
    );
    if (result.affectedRows) {
      res.status(200).json({ message: "Votre mot de passe a été modifié" });
    } else {
      res
        .status(401)
        .send("Modification impossible, vérifiez votre ancien mot de passe.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.payload;
    const [result] = await tables.user.updateUserWithoutPassword(id, req.body);
    if (result.affectedRows) {
      res.status(200).json({ message: "Votre profil a bien été mis à jour" });
    } else {
      res
        .status(401)
        .send("Modification impossible, vérifiez vos informations");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.payload;
    const [result] = await tables.user.deleteUser(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " Votre compte a été supprimé",
      });
    } else {
      res.status(400).send("Ce compte n'existe pas");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
      expiresIn: "0h",
    });
    res.status(200).send({ message: "vous avez été déconnecté", token });
  } catch (error) {
    res.status(500).send(error);
  }
};

// const editPassword = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { hashPassword } = req.body;
//     const [result] = await tables.user.editUserButOnlyPassword(
//       id,
//       hashPassword
//     );
//     if (result.affectedRows) {
//       res
//         .status(200)
//         .json({ message: "Votre mot de passe a bien été modifié" });
//     } else {
//       res.status(401).send("Réessayez pour voir ?");
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// The B of BREAD - Browse (Read All) operation
// const browse = async (req, res, next) => {
//   try {
//     // Fetch all items from the database
//     const items = await tables.item.readAll();

//     // Respond with the items in JSON format
//     res.json(items);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The R of BREAD - Read operation

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the item data from the request body
//   const item = req.body;

//   try {
//     // Insert the item into the database
//     const insertId = await tables.item.create(item);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted item
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  getAllUsers,
  addNewUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  logout,
  editPassword,
  updateUser,
};
