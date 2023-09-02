const Favorite = require('../DB_connection')


const deleteFav = async (req, res) => {
    const { id } = req.params;

    try {
        await Favorite.destroy({ where: { id } })

        const characters = await Favorite.findAll();
        return res.status(200).json([characters])
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = deleteFav