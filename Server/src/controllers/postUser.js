const { User } = require('../DB_connection')


const postUser = async (req, res) => {
    const { email, password } = req.body;

    const user = {
        email,
        password
    }

    try {
        const missingData = Object.values(user).some(value => !value)
        if(missingData) return res.status(400).json({error:'Faltan datos'})

        const [newUser, created] = await User.findOrCreate({
            where: { email: user.email },
            defaults: {
                password: user.password
            }
        });

        !created
            ? res.status(400).json({error: 'Usuario existente'})
            : res.status(200).json({error: 'Usuario guardado'})

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

}

module.exports = postUser