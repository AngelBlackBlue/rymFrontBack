const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios')

const getCharById = (req, res)=>{

    const {id} = req.params;

    axios
    .get(`${URL}/${id}`)
    .then((response) => {
      
        const { id, name, gender, species, origin, image, status } = response.data;

        const character = { 
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status,
        };

        if(character){
            return res.status(200).json(character);
        }

        return res.status(404).send('Not fount');

      }   
    ) 
    .catch((error)=> {
      return res.status(500).send(error.message);
    })                 

}

module.exports={getCharById};














// const axios = require ('axios');

// const getCharById = (response, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res) => {
      
//         const { id, name, gender, species, origin, image,    status } = res.data;

//         const character = { 
//             id,
//             name,
//             gender,
//             species,
//             origin: origin.name,
//             image,
//             status,
//           };

          
//         response.writeHead(200, {'Content-Type': "application/json"});
//         response.end(JSON.stringify(character));
//     })
//     .catch((error)=> {
//         response.writeHead(500, {'Content-Type': "'text/plain'"});
//         response.end(error.message);

//     })


// }    
// module.exports = getCharById; 

