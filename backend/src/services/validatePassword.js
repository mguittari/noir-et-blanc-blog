const validatePassword = async (req, res, next) => {
  const { newPassword } = req.body;

  const errors = [];

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (newPassword === "") {
    errors.push({ field: "password", message: "Ce champ est requis" });
  } else if (newPassword.length >= 251) {
    errors.push({
      field: "new_password",
      message: "Doit contenir moins de 250 caractères",
    });
  } else if (!passwordRegex.test(newPassword)) {
    errors.push({
      field: "new_password",
      message:
        "Le mot de passe doit contenir 8 caractères minimum et être composé d'au moins une minuscule, une majuscule, un chiffre et un caractère spécial parmi @$!%*?&",
    });
  }

  if (errors.length > 0) {
    console.info("Erreurs de validation:", errors);
    return res.status(422).json({ errors });
  }

  next();
  return null;
};

module.exports = validatePassword;
