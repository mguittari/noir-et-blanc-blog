const tables = require("../tables"); // Assurez-vous d'importer correctement vos fonctions pour accéder à la base de données

const validatePseudo = async (req, res, next) => {
  const { pseudo } = req.body;

  const errors = [];
  const pseudoRegex = /^[a-zA-Z][a-zA-Z0-9_-]{3,17}$/;

  // Validation du pseudo
  if (pseudo === "") {
    errors.push({ field: "pseudo", message: "Ce champ est requis" });
  } else if (pseudo.length >= 21) {
    errors.push({
      field: "pseudo",
      message: "Le pseudo doit contenir moins de 20 caractères",
    });
  } else if (!pseudoRegex.test(pseudo)) {
    errors.push({
      field: "pseudo",
      message:
        "Le nouveau pseudo doit commencer par une lettre, faire 20 caractères maximum et ne pas contenir de caractère spécial à l'exception du petit tiret - et de l'underscore _ ",
    });
  } else {
    try {
      const [existingPseudo] = await tables.user.getUserByPseudo(pseudo);
      if (existingPseudo.length > 0) {
        errors.push({
          field: "pseudo",
          message: "Ce pseudo est déjà utilisé, veuillez en choisir un autre",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du pseudo:", error);
    }
  }

  // Si des erreurs sont présentes, les renvoyer
  if (errors.length > 0) {
    console.info("Erreurs de validation:", errors);
    return res.status(422).json({ errors });
  }

  next();
  return null;
};

module.exports = validatePseudo;
