let myFavorites =[];

const postFav = (req, res) => {
    
    const { id, name, gender, species, origin, image, status } = req.body;

    const character = { 
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
    };

    myFavorites.push(character);

    return res.status(200).json(myFavorites);   
}

const deleteFav = (req, res) => {

    const {id} = req.params;

    myFavorites = myFavorites.filter(favorite => favorite.id !== +id);

    return res.status(200).json(myFavorites); 

}

module.exports={postFav ,deleteFav};