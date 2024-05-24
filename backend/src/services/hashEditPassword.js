const argon2 = require("argon2");
const tables = require("../tables");

const hashEditPassword = async (req, res, next) => {
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  try {
    const { oldPassword, newPassword } = req.body;

    if (oldPassword) {
      const id = req.payload;
      console.info("id -->", id);

      const [user] = await tables.user.getUserById(id);
      console.info("user -->", user);
      if (user.length) {
        const isVerify = await argon2.verify(
          user[0].hashed_password,
          oldPassword
        );
        if (isVerify) {
          if (newPassword) {
            const hashedPassword = await argon2.hash(newPassword, hashOptions);
            delete req.body.oldPassword;
            delete req.body.newPassword;
            req.body.hashed_password = hashedPassword;
            next();
          } else {
            res.status(401).json("Vérifiez vos données");
          }
        } else {
          res.status(401).json("Vérifiez vos données");
        }
      } else {
        res.status(401).json("User n'existe pas");
      }

      // const hashedNewPassword = await argon2.hash(newPassword, hashOptions);
      // delete req.body.newPassword;

      // req.body.hashPassword = hashedNewPassword;

      // next();
    } else {
      res.status(401).json("Vérifier vos données (hashPassword middleware)");
    }
  } catch (error) {
    // fs.unlinkSync(req.file.path);

    res.status(500).json(error);
  }
};
module.exports = hashEditPassword;
