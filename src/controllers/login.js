const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  return userFound
    ? res.status(200).json({ access: true }) //access es un estado LOCAL, del de permiso
    : res.status(404).json({ access: false });

  //esta forma es lo mismo⬇️
  // if (userFound) return res.status(200).json({ access: true })

  // return res.status(404).json({ access: false });
};

module.exports = {
  login,
};
