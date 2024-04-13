/* eslint-disable prettier/prettier */
const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  try {
    const { password } = req.body;

    if (password) {
      const hashedPassword = await argon2.hash(password, hashOptions);
      delete req.body.password;

      req.body.hashed_password = hashedPassword;

      next();
    } else {
      res.status(401).send("Vérifiez vos données et réessayez");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = hashPassword;
