const tables = require("../tables"); // Assurez-vous d'importer correctement vos fonctions pour accéder à la base de données

const validateUser = async (req, res, next) => {
  const { pseudo, email, password } = req.body;

  const errors = [];
  const pseudoRegex = /^[a-zA-Z][a-zA-Z0-9_-]{3,17}$/;
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validation du pseudo
  if (pseudo === "") {
    errors.push({ field: "pseudo", message: "Ce champ est requis" });
  } else if (pseudo.length >= 21) {
    errors.push({
      field: "pseudo",
      message: "Doit contenir moins de 20 caractères",
    });
  } else if (!pseudoRegex.test(pseudo)) {
    errors.push({
      field: "pseudo",
      message:
        "Le pseudo doit commencer par une lettre, faire 20 caractères maximum et ne pas contenir de caractère spécial à l'exception du petit tiret - et de l'underscore _ ",
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

  // Validation de l'email
  if (email === "") {
    errors.push({ field: "email", message: "Ce champ est requis" });
  } else if (email.length >= 51) {
    errors.push({
      field: "email",
      message: "Doit contenir moins de 50 caractères",
    });
  } else if (!emailRegex.test(email)) {
    errors.push({
      field: "email",
      message: "Courriel invalide, vérifiez la saisie et réessayez",
    });
  } else {
    try {
      const [existingEmail] = await tables.user.getUserByEmail(email);
      if (existingEmail.length > 0) {
        errors.push({
          field: "email",
          message: "Ce courriel est déjà utilisé, veuillez en saisir un autre",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email:", error);
    }
  }

  // Validation du mot de passe
  if (password === "") {
    errors.push({ field: "password", message: "Ce champ est requis" });
  } else if (password.length >= 251) {
    errors.push({
      field: "password",
      message: "Doit contenir moins de 250 caractères",
    });
  } else if (!passwordRegex.test(password)) {
    errors.push({
      field: "password",
      message:
        "Le mot de passe doit contenir 8 caractères minimum et être composé d'au moins une minuscule, une majuscule, un chiffre et un caractère spécial parmi @$!%*?&",
    });
  }

  // Si des erreurs sont présentes, les renvoyer
  if (errors.length > 0) {
    console.info("Erreurs de validation:", errors);
    return res.status(422).json({ errors });
  }

  next();
  return null;
};

module.exports = validateUser;
