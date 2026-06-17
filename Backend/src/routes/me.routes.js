const express = require("express");
const router = express.Router();
const usuarios = require("../data/usuarios");

router.get('/me', (req, res) => {
  if (!req.user || !req.user.id) return res.json(null);
  
  const userId = req.user.id;

  for(let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    if (usuario.id === userId) {
      return res.json(usuario);
    }
  }
  res.status(400).json({ message: "Error. El usuario no existe en la base de datos." });
});

module.exports = router;
