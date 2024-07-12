const validateUser = (req, res, next) => {
  const { pseudo, email, password } = req.body;

  const errors = [];
  const pseudoRegex = /^[a-zA-Z][a-zA-Z0-9_-]{3,17}$/;
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (pseudo === "") {
    errors.push({ field: "pseudo", message: "This field is required" });
  } else if (pseudo.length >= 21) {
    errors.push({
      field: "pseudo",
      message: "Should contain less than 20 characters",
    });
  } else if (!pseudoRegex.test(pseudo)) {
    errors.push({ field: "pseudo", message: "Invalid pseudo" });
  }

  if (email === "") {
    errors.push({ field: "email", message: "This field is required" });
  } else if (email.length >= 51) {
    errors.push({
      field: "email",
      message: "Should contain less than 50 characters",
    });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  if (password === "") {
    errors.push({ field: "password", message: "This field is required" });
  } else if (password.length >= 251) {
    errors.push({
      field: "password",
      message: "Should contain less than 250 characters",
    });
  } else if (!passwordRegex.test(password)) {
    errors.push({ field: "password", message: "Invalid password" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateUser;
