const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    const { id, name, gender, image } = req.body;

    const character = {
        id,
        name,
        gender,
        image,  
    };

    try {

        const missingData = Object.values(character).some(value => !value)
        if (missingData) return res.status(401).send('Faltan datos')

        await Favorite.create(character);

        const characters = await Favorite.findAll();
        return res.status(200).json(characters)

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

}

module.exports = postFav