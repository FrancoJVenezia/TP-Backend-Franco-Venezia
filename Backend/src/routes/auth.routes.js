const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../data/usuarios");
const tokenConfig = require("../config/tokenConfig");
const loginLimiter = require("../middleware/loginRateLimit");

const router = express.Router();

//Post de logueo(generamos un token)
router.post("/login", loginLimiter, (req,res)=>{

    const { username, password } = req.body;

    const normalizedUsername = typeof username === 'string' ? username.trim() : username;
    const normalizedPassword = typeof password === 'string' ? password.trim() : password;

    if(!normalizedUsername || typeof normalizedUsername !== 'string' || normalizedUsername.length < 4 || normalizedUsername.length > 50) {
      console.error("Error. Tiene que ingresar un nombre de usuario valido.");
      return res.status(400).json({ message:"Error. Tiene que ingresar un nombre de usuario valido." });
    }

    if(!normalizedPassword || typeof normalizedPassword !== 'string' || normalizedPassword.length < 4 || normalizedPassword.length > 30) {
      console.error("Error. Tiene que ingresar una contraseña valida.");
      return res.status(400).json({ message:"Error. Tiene que ingresar una contraseña valida." });
    }

    for(let i = 0; i < users.length; i++) {
      const user = users[i];

      if (normalizedUsername == user.username && normalizedPassword == user.password){
        const token = jwt.sign({ id: user.id, role: user.role, username: user.username, name: user.name }, tokenConfig.SECRET_KEY, { expiresIn: tokenConfig.expiresIn });

        console.log(`[POST] login. Se ha iniciado sesion correctamente, ${user.name} (${user.role})`);
        return res.json({ accessToken: token })
      }
    }

    res.status(401).json({ message:"Credenciales Incorrectas" })

});


router.post("/logout", (req, res) => {
});


module.exports = router;
