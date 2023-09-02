const { User } = require('../DB_connection');


const login = async (req, res) => {

    const { email, password } = req.query;

    const user = {
        email,
        password
    }

    try {

        const missingData = Object.values(user).some(value => !value)
        if (missingData) return res.status(400).send('Faltan datos')

        const userFound = await User.findOne({ where: { email: user.email } });
        if (!userFound) return res.status(404).send('Usuario no encontrado')

        if(userFound.password === user.password) return res.status(200).json({ access: true });
        return res.status(403).send('Contraseña incorrecta')
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}

module.exports = login;